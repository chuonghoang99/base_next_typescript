import { NoneLayout } from '@/components/layouts/NoneLayout'
import { Meta } from '@/components/meta'
import { Error } from '@/components/templates/Error'
import Login from '@/components/templates/Login'
import { HttpResponse } from '@/lib/api'
import { NextPageWithLayout } from '@/lib/next/types'

type Props = HttpResponse<null>

const Page: NextPageWithLayout<Props> = ({ err, data }) => {
  return err ? <Error {...err} /> : <Login />
}

Page.getLayout = NoneLayout
Page.getMeta = Meta(() => ({ title: 'Login' }))
export default Page
