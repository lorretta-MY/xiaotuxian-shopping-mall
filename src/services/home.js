import { http } from '@/utils/http.ts'

// 首页轮播图
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// 首页分类
export const getHomeCategoryMutliAPI = () => {
  return http({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 首页热门推荐
export const getHomeHotMutliAPI = () => {
  return http({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
