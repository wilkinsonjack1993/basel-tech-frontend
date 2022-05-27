import { useRef, useState } from 'react'
import useOnClickOutside from './useOnClickOutside'

import Link from 'next/link'
import { Logo } from './Logo'

const navData = [
  {
    name: 'Ecosystem',
    href: '/ecosystem',
  },
  {
    name: 'Events',
    href: '/events',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function NavBar() {
  const [isModalOpen, setModalOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setModalOpen(false))
  return (
    <div className="z-30 flex w-full items-center justify-between px-5 py-4 text-2xl font-bold">
      <Logo />
      <nav className="hidden items-center space-x-10 text-base uppercase tracking-wider md:flex">
        {navData.map((n) => {
          return (
            <Link key={n.name} href={n.href}>
              {n.name}
            </Link>
          )
        })}
      </nav>
      <div className="md:hidden">
        {isModalOpen ? (
          <div
            ref={ref}
            className="fixed left-0 top-0 h-[100vh]  w-[100vw] translate-x-[-1px] bg-white transition"
          >
            <div className="px-5 pt-5 pb-6">
              <div className="flex w-full flex-row justify-between">
                <Logo />
                <button onClick={() => setModalOpen(!isModalOpen)} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="relative z-10 mt-[2rem]">
                <nav className="grid gap-y-8">
                  {navData.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center justify-center p-3 uppercase hover:bg-gray-100"
                    >
                      <h1 className="my-3 ml-3 text-base font-bold tracking-wider ">
                        {item.name}
                      </h1>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => setModalOpen(!isModalOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
