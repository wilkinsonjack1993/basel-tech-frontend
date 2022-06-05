import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { EventType } from '../../pages/events'
import DateFormatter from '../Blog/DateFormatter'

const EventList = (props: { events: EventType[] }) => {
  const [showAll, setShowAll] = useState(false)
  const { t } = useTranslation('events')
  const { t: tCommon } = useTranslation('common')
  const events = showAll ? props.events : props.events.slice(0, 3)

  if (events.length === 0) {
    return (
      <div className="m-4 mt-6 mb-16 w-full max-w-sm text-left lg:max-w-4xl">
        {t('no-events')}
      </div>
    )
  }

  return (
    <>
      {events.map((event, index) => {
        return (
          <div
            className="m-4 w-full max-w-sm overflow-hidden rounded-xl border bg-white shadow-lg lg:flex lg:max-w-4xl"
            key={index}
          >
            <div
              className="m-4 h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
              style={{ backgroundImage: `url('${event.image}')` }}
              title="Woman holding a mug"
            ></div>
            <div className="flex flex-col justify-between  border-gray-400 p-4 leading-normal">
              <div className="mb-8 text-left">
                <p className="mb-2 flex items-center text-sm font-bold text-blue-500">
                  <DateFormatter dateString={event.date} />
                </p>
                <div className="mb-2 text-xl font-bold text-gray-900">
                  {event.name}
                </div>
                <p className="text-base text-gray-700">{event.description}</p>
              </div>
              <div className="flex items-center">
                <img
                  className="mr-4 h-10 w-10 rounded-full"
                  src={event.organisation.image}
                  alt={`Avatar of ${event.organisation.name}`}
                />
                <div className="text-sm">
                  <p className="leading-none text-gray-900">
                    {event.organisation.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {!showAll && (
        <button
          className="mt-3 rounded-full border-2 bg-gray-200 px-4 py-1 hover:-translate-y-1 hover:transform"
          onClick={() => setShowAll(true)}
        >
          {tCommon('show-all')}
        </button>
      )}
    </>
  )
}

export default EventList
