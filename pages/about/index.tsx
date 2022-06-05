import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const About = () => {
  const { t } = useTranslation('about')
  return (
    <div className="w-full">
      <section
        className="h-[500px] w-full object-cover"
        style={{ backgroundImage: "url('/images/messe-banner.png')" }}
      ></section>
      <div className="mx-4 my-12 max-w-6xl lg:m-auto lg:my-16">
        <h1 className="mb-6">{t('about-title')}</h1>

        <p>{t('about-description')}</p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started
        </p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started
        </p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started.
        </p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started
        </p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started
        </p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started
        </p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started
        </p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started
        </p>
        <p>
          This is the about page. With a bunch of text about BaselTech and how
          it started
        </p>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  }
}

export default About
