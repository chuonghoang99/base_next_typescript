import { AppError, getAppErrorMessage } from '@/lib/next/error'
import { AppPropsWithLayout } from '@/lib/next/types'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // check err
  const errorMessage = getAppErrorMessage(pageProps)
  if (errorMessage) return <AppError {...errorMessage} />

  const getLayout = Component.getLayout ?? ((page) => page)
  const getMeta = Component.getMeta ?? ((page) => page)
  return getLayout(
    getMeta(
      <Component {...pageProps} />,

      pageProps
    )
  )
}

export default appWithTranslation(MyApp)
