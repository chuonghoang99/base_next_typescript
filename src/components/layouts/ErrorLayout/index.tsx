import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
export const ErrorLayout = ({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
