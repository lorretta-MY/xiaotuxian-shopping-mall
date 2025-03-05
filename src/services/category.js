import { http } from '@/utils/http.ts'

// 首页轮播图
export const getCategoryTopApi = () => {
  return http({
    method: 'GET',
    url: '/category/top',
  })
}
