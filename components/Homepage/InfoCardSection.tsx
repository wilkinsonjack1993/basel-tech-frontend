import Image from 'next/image'
import { InfoCard } from './InfoCard'
import { useTranslation } from 'next-i18next'

export const InfoCardSection = () => {
  const { t } = useTranslation('homepage')
  return (
    <section className="grid grid-cols-1 pt-20 last:justify-center md:grid-cols-1 lg:grid-cols-3">
      <InfoCard
        title={t('info-card-startups-title')}
        image={
          <Image
            src="/icons/building.png"
            alt={t('info-card-startups-title')}
            width={72}
            height={70}
          />
        }
      >
        {t('info-card-startups-description')}
      </InfoCard>
      <InfoCard
        title={t('info-card-startups-title')}
        image={
          <Image
            src="/icons/building.png"
            alt={t('info-card-startups-title')}
            width={72}
            height={70}
          />
        }
      >
        {t('info-card-startups-description')}
      </InfoCard>
      <InfoCard
        title={t('info-card-startups-title')}
        image={
          <Image
            src="/icons/building.png"
            alt={t('info-card-startups-title')}
            width={72}
            height={70}
          />
        }
      >
        {t('info-card-startups-description')}
      </InfoCard>
    </section>
  )
}
