import type { NextPage } from 'next'
import PostPreview from '../components/Blog/PostPreview'
import PostsGrid from '../components/Blog/PostsGrid'
import Container from '../components/Common/Container'
import CallToAction from '../components/Homepage/CallToAction'
import { HomepageImage } from '../components/Homepage/HomepageImage'
import { InfoCardSection } from '../components/Homepage/InfoCardSection'
import { DEFAULT_LOCALE } from '../lib/constants'
import { getAllPosts } from '../lib/posts-api'
import PostType from '../types/Post'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

type Props = {
  allPosts: PostType[]
}

const Home: NextPage<Props> = ({ allPosts }: Props) => {
  const { t } = useTranslation('homepage')

  return (
    <>
      <HomepageImage />
      <Container>
        <InfoCardSection />
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2">
          <CallToAction
            color="yellow-200"
            title={t('contact-us-cta-title')}
            href="/contact"
            buttonText={t('contact-us-cta-button')}
            description={t('contact-us-cta-description')}
          />
          <CallToAction
            color="yellow-200"
            title={t('contact-us-cta-title')}
            href="/contact"
            buttonText={t('contact-us-cta-button')}
            description={t('contact-us-cta-description')}
          />
        </div>
        <PostsGrid>
          {allPosts.map((post) => {
            return <PostPreview key={post.slug} {...post} />
          })}
        </PostsGrid>
      </Container>
    </>
  )
}

export default Home

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const allPosts = getAllPosts(
    ['title', 'date', 'abstract', 'coverImage', 'slug', 'topic'],
    locale || DEFAULT_LOCALE
  )

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'homepage'])),
      allPosts,
    },
  }
}
