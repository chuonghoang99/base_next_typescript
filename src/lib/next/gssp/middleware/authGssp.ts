import { addToken } from '@/lib/asserts'
import { checkToken } from '@/service/server/authenticate/checkToken'
import { RedirectError, RedirectProps } from '../error'
import { GsspMiddleware } from '../type'

export const authGssp =
  (
    redirectPropsToLogin: RedirectProps = {
      permanent: false,
      destination: '/login',
    }
  ): GsspMiddleware =>
  async (...args) => {
    const token = args[0].req.cookies.token_bitrust

    if (!token) {
      throw new RedirectError(redirectPropsToLogin)
    }

    const { data } = await checkToken({
      headers: {
        ...addToken({
          Authorization: token,
        }),
      },
    })

    if (data === null || data.wsResponse.isValidToken === false)
      throw new RedirectError(redirectPropsToLogin)

    return [
      ...args,
      {
        Authorization: args[0].req.cookies.token_bitrust,
      },
    ]
  }
