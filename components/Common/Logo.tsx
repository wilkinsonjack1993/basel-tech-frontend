import Link from 'next/link'
import { forwardRef, Ref } from 'react'

export const Logo = () => (
  <Link href="/">
    <a>
      <span className="cursor-pointer text-4xl">
        Basel<span className="text-primary-main">Tech</span>
      </span>
    </a>
  </Link>
)
