import { ReactNode } from 'react'

const PostsGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-16 mb-32 grid grid-cols-1 gap-8 md:grid-cols-2">
      {children}
    </div>
  )
}

export default PostsGrid
