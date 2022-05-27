import { NextPage } from 'next'
import PostPreview from '../../components/Blog/PostPreview'
import PostsGrid from '../../components/Blog/PostsGrid'
import Container from '../../components/Common/Container'
import { DEFAULT_LOCALE } from '../../lib/constants'
import { getAllPosts } from '../../lib/posts-api'
import Post from '../../types/Post'

type Props = {
  allPosts: Post[]
}

const Blog: NextPage<Props> = ({ allPosts }: Props) => {
  return (
    <Container>
      <PostsGrid>
        {allPosts.map((post) => {
          return <PostPreview key={post.slug} {...post} />
        })}
      </PostsGrid>
    </Container>
  )
}

export default Blog

export const getStaticProps = async ({ locale }: { locale?: string }) => {
  const allPosts = getAllPosts(
    ['title', 'date', 'abstract', 'coverImage', 'slug', 'topic'],
    locale || DEFAULT_LOCALE
  )

  return {
    props: { allPosts },
  }
}
