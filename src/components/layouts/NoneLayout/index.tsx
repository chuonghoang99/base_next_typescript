import { ReactElement } from 'react'
import { RecoilRoot } from 'recoil'

export const NoneLayout = (page: ReactElement) => (
  <RecoilRoot>
    <h1>None Layout</h1>
    <div>{page}</div>
  </RecoilRoot>
)
