import { NextPage } from 'next'
import PostPreview from '../../components/Blog/PostPreview'
import PostsGrid from '../../components/Blog/PostsGrid'
import Container from '../../components/Common/Container'
import { getAllPosts } from '../../lib/api'
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
