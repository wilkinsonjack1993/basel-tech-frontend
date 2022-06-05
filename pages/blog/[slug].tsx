import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/posts-api'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/Post'
import Container from '../../components/Common/Container'
import Image from 'next/image'
import DateFormatter from '../../components/Blog/DateFormatter'
import { ALL_LOCALES, DEFAULT_LOCALE } from '../../lib/constants'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      <article className="mb-32 mt-14 max-w-3xl text-left">
        <div className="relative mb-10 h-56 w-full md:h-80">
          <Image
            src={post.coverImage}
            alt="Article Cover Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="mb-3">{post.title}</h2>
        <div className="mb-4 ">
          <DateFormatter dateString={post.date} />
        </div>
        <div className="mx-auto ">
          <div
            className={'markdown'}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </Container>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
  locale: string
}

export async function getStaticProps(props: Params) {
  const post = getPostBySlug(
    props.params.slug,
    ['title', 'date', 'slug', 'content', 'coverImage'],
    props.locale || DEFAULT_LOCALE
  )
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      ...(await serverSideTranslations(props.locale, ['common', 'blog'])),
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths({ locale }: { locale?: string }) {
  const posts = getAllPosts(['slug'], locale || DEFAULT_LOCALE)

  return {
    paths: posts
      .map((post) =>
        ALL_LOCALES.map((locale) => ({ locale, params: { slug: post.slug } }))
      )
      .flat(),
    fallback: false,
  }
}
