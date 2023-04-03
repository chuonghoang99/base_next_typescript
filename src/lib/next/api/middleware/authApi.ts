import { UnauthorizedError } from '@/lib/errors'
import { HandlerMiddleware } from '../type'

export const authApi: HandlerMiddleware = async (...args) => {
  const token = args[0].cookies.token_bitrust
  if (!token) {
    throw new UnauthorizedError()
  }

  return [
    ...args,
    {
      Authorization: token,
    },
  ]
}
