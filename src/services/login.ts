import type { LoginResult } from '@/types/member.t'
import { http } from '@/utils/http.ts'

type loginParams = {
  code: string
  encryptedData: string
  iv: string
}
// 企业版 小程序登录
export const postLoginApi = (data: loginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 自测版 小程序登录
export const postLoginSimpleApi = (data: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data,
  })
}
