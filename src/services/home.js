import { http } from '@/utils/http.ts'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryMutliAPI = () => {
  return http({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
