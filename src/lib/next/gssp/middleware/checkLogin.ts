import { addToken } from '@/lib/asserts'
import { checkToken } from '@/service/server/authenticate/checkToken'
import { RedirectError, RedirectProps } from '../error'
import { GsspMiddleware } from '../type'

export const checkLogin =
  (
    redirectPropsToDashboard: RedirectProps = {
      permanent: false,
      destination: '/',
    }
  ): GsspMiddleware =>
  async (...args) => {
    const token = args[0].req.cookies.token_bitrust

    if (token) {
      const { data } = await checkToken({
        headers: {
          ...addToken({
            Authorization: token,
          }),
        },
      })
      if (data?.wsResponse.isValidToken === true)
        throw new RedirectError(redirectPropsToDashboard)
    }

    return [...args]
  }
