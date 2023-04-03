import { ErrorLayout } from '@/components/layouts/ErrorLayout'

import { AppPropsWithLayout } from '@/lib/next/types'

type ErrorMessage = {
  title: string
  message: React.ReactNode
  statusCode: 404 | 500
}

export const errorMessages: { [k: number]: ErrorMessage } = {
  404: {
    title: '404 Not Found',
    message: (
      <>
        <h1>404 Not Found</h1>
      </>
    ),
    statusCode: 404,
  },
  500: {
    title: '500 Server Error',
    message: (
      <>
        <p>500 Server Error</p>
      </>
    ),
    statusCode: 500,
  },
}

export function getAppErrorMessage(pageProps: AppPropsWithLayout['pageProps']) {
  if (pageProps.err) {
    return errorMessages[pageProps.err.status] || errorMessages[500]
  }
}

export function AppError(props: ErrorMessage) {
  return <ErrorLayout></ErrorLayout>
}
