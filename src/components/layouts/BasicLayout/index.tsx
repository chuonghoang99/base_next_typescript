import { ReactElement } from 'react'
import { RecoilRoot } from 'recoil'

export const BasicLayout = (page: ReactElement) => {
  return (
    <RecoilRoot>
      <div>{page}</div>
    </RecoilRoot>
  )
}
