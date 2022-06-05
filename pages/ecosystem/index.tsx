import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { ATagButton } from '../../components/Common/Button'

const Ecosystem: NextPage = () => {
  const { t } = useTranslation('ecosystem')
  return (
    <section className="w-full bg-yellow-100 px-6 py-16 pb-32 md:px-16">
      <div className="m-auto max-w-3xl py-16 text-left ">
        <h1>
          <span className="text-primary-main">{t('title-1')}</span>
          <br />
          {t('title-2')}
        </h1>
        <p className="pt-8 text-lg md:text-2xl">{t('description')}</p>
      </div>

      <div className="w-full rounded-lg bg-white p-6">
        <Image
          src="/images/airtable-image.jpg"
          alt="Airtable screenshot"
          layout="responsive"
          width={1600}
          height={900}
        />
      </div>
      <h2 className="my-16">
        <span className="pb-8 text-primary-main">{t('cta-title')}</span>
        <br />
        {t('cta-title-2')}
      </h2>
      <ATagButton
        target="_blank"
        href="https://airtable.com/shrvY4SoUajhElMFP/tbl8Z68FXQp21x9qr"
      >
        {t('cta-button')}
      </ATagButton>
    </section>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'ecosystem'])),
    },
  }
}

export default Ecosystem
