import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import EventList from '../../components/Events/EventList'
import { getEvents } from '../../lib/events-api'

export interface EventType {
  name: string
  description: string
  date: string
  location: string
  image: string
  link: string
  organisation: {
    name: string
    image: string
  }
}

type Props = {
  futureEvents: EventType[]
  pastEvents: EventType[]
}

const Events = (props: Props) => {
  const { t } = useTranslation('events')
  return (
    <div>
      <section className="border-b-2 py-12">
        <h4 className="ml-4 text-left">{t('upcoming')}</h4>
        <EventList events={props.futureEvents} />
      </section>
      <section className="my-12">
        <h4 className="ml-4 text-left">{t('upcoming')}</h4>
        <EventList events={props.pastEvents} />
      </section>
    </div>
  )
}

export default Events

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const { futureEvents, pastEvents } = getEvents()

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'events'])),
      futureEvents,
      pastEvents,
    },
  }
}
