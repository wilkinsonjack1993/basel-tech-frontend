import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react'

export const BUTTON_CLASSES =
  'rounded-sm bg-primary-main p-5 text-base font-medium uppercase tracking-wider text-white md:text-xl hover:bg-primary-light cursor-pointer'

export const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return <button {...props}>{props.children}</button>
}

export const ATagButton = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  return (
    <a className={BUTTON_CLASSES} {...props}>
      {props.children}
    </a>
  )
}
