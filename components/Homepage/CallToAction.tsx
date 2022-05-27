import { ReactNode } from 'react'
import { ATagButton } from '../Common/Button'

interface Props {
  title: ReactNode
  description: ReactNode
  href: string
  buttonText: ReactNode
  color: string
}

const CallToAction = (props: Props) => {
  return (
    <div className={`w-full py-24 px-20 bg-${props.color} h-fit`}>
      <div className="h-fit w-full rounded-lg bg-white p-8 text-center">
        <h3 className="mb-8 text-primary-main">{props.title}</h3>
        <p className="mb-20">{props.description}</p>
        <ATagButton href={props.href}>{props.buttonText}</ATagButton>
      </div>
    </div>
  )
}

export default CallToAction
