import type { NextPage } from 'next'
import PostPreview from '../components/Blog/PostPreview'
import PostsGrid from '../components/Blog/PostsGrid'
import Container from '../components/Common/Container'
import CallToAction from '../components/Homepage/CallToAction'
import { HomepageImage } from '../components/Homepage/HomepageImage'
import { InfoCardSection } from '../components/Homepage/InfoCardSection'
import { getAllPosts } from '../lib/api'
import PostType from '../types/Post'

type Props = {
  allPosts: PostType[]
}

const Home: NextPage<Props> = ({ allPosts }: Props) => {
  return (
    <>
      <HomepageImage />
      <Container>
        <InfoCardSection />
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2">
          <CallToAction
            color="yellow-200"
            title="Got an idea? Get in contact!"
            href="/contact"
            buttonText="Contact Us"
            description="If you want to add a new organisation or get in contact with any querys then we would love to hear from you!"
          />
          <CallToAction
            color="blue-200"
            title="Got an idea? Get in contact!"
            href="/contact"
            buttonText="Contact Us"
            description="If you want to add a new organisation or get in contact with any querys then we would love to hear from you!"
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

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'abstract',
    'coverImage',
    'slug',
    'topic',
  ])

  return {
    props: { allPosts },
  }
}
