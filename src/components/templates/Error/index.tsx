import { Err } from '@/lib/api'
import { ReactNode } from 'react'

type Props = Err & { children?: ReactNode }

export const Error = ({ status, children }: Props) => {
  return (
    <main aria-label='error'>
      {status} - {children}
    </main>
  )
}
