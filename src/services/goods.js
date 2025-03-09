import { http } from '@/utils/http.ts'

// 首页轮播图
export const getGoodsByIdApi = (id) => {
  return http({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
