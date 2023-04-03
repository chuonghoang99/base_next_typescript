import { RedirectError, RedirectProps } from '../error'
import { GsspMiddleware } from '../type'

export const verifyAccount =
  (
    redirectPropsToLogin: RedirectProps = {
      permanent: false,
      destination: '/login',
    }
  ): GsspMiddleware =>
  async (...args) => {
    const email = args[0].req.cookies.email_bitrust

    if (!email) {
      throw new RedirectError(redirectPropsToLogin)
    }

    return [...args, email]
  }
