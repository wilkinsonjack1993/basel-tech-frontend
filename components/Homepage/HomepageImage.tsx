import { useTranslation } from 'next-i18next'
import Image from 'next/image'

export const HomepageImage = () => {
  const { t } = useTranslation('homepage')
  return (
    <section className="relative w-full">
      <Image
        src="/images/HomepageImage.webp"
        alt="Homepage Header Section Image"
        layout="responsive"
        width={1600}
        height={900}
      />

      <div className="m-auto h-fit w-full rounded-lg bg-white p-6 md:absolute md:top-[50%] md:left-[5%] md:max-w-sm md:-translate-y-1/2 lg:left-[10%] lg:p-10">
        <h2 className="mb-5 text-3xl">
          <span className="text-primary-main">{t('banner-image-title')}</span>
        </h2>
        <p className="text-xl">{t('banner-image-description')}</p>
      </div>
    </section>
  )
}
