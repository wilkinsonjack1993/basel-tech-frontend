import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-5 max-w-7xl">{children}</div>
}

export default Container
