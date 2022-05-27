import { ReactNode } from 'react'

export const InfoCard = (props: {
  title: ReactNode
  image: ReactNode
  children: ReactNode
}) => {
  return (
    <div className="m-4 rounded-2xl bg-white p-6 py-12 ">
      {props.image}
      <h3 className="py-4 text-2xl">{props.title}</h3>
      <p>{props.children}</p>
    </div>
  )
}
