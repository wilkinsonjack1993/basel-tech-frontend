import DateFormatter from './DateFormatter'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  coverImage: string
  date: string
  topic: string
  slug: string
}

const PostPreview = ({ title, coverImage, date, topic, slug }: Props) => {
  return (
    <Link as={`/blog/${slug}`} href={`/blog/${slug}`}>
      <div className="cursor-pointer overflow-hidden rounded-2xl border">
        <div className="relative mb-5 h-56 w-full md:h-80">
          <Image
            src={coverImage}
            alt={`${title} cover image`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 text-left">
          <h6>{topic}</h6>
          <h3 className="mb-3">
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 ">
            <DateFormatter dateString={date} />
          </div>
          {/* <p className="mb-4 leading-relaxed">{abstract}</p> */}
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
