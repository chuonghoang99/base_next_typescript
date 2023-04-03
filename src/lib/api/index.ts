export type BackendApiErr = {
  status?: string
  message?: string
  result?: string
  errorMessages?: string[]
  redirectUrl?: string
  validationErrors?: {
    title: string
    errors: { name: string; messages: string[] }[]
  }
}

export type Err = {
  status?: number
  message?: string
  result?: string
  errorMessages?: string[]
  redirectUrl?: string
  validationErrors?: {
    title: string
    errors: { name: string; messages: string[] }[]
  }
}

export type ErrResponse = {
  status: number
  data: null
  err: Err
}

export type DataResponse<T> = {
  status: number
  err: null
  data: T
}

export type HttpResponse<T> = DataResponse<T> | ErrResponse

export type BaseResponse<T> = {
  code: number
  message: string
  wsResponse: T
}

export type BaseRequest<T> = {
  sessionId: string
  token: string
  username: string
  wsRequest: T
}
