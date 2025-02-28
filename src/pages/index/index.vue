<template>
  <!-- 导航 -->
  <CustomerNavbar />
  <!-- 可滑动区域 -->
  <scroll-view
    :refresher-triggered="isTriggered"
    scroll-y
    refresher-enabled
    style="flex: 1"
    @scrolltolower="handleScrollToLower"
    @refresherrefresh="handleRefresh"
  >
    <pageSkeleton v-if="isPageLoading" />

    <template v-else>
      <!-- 轮播图 -->
      <myCommonSwiper :pageType="1" ref="myCommonSwiperRef" />
      <!-- 分类 -->
      <CustomerCategory :list="categoryList" />
      <!-- 热门推荐 -->
      <CustomerHotPanel :list="HotInfoList" />
      <!-- 猜你喜欢 -->
      <myCommonGuess ref="myCommonGuessRef" />
    </template>
  </scroll-view>
</template>

<script setup>
import { ref } from 'vue'

import { onLoad } from '@dcloudio/uni-app'
import { getHomeCategoryMutliAPI, getHomeHotMutliAPI } from '@/services/home'

import CustomerNavbar from './components/CustomerNavbar.vue'
import CustomerCategory from './components/CustomerCategory.vue'
import CustomerHotPanel from './components/CustomerHotPanel.vue'
import pageSkeleton from './components/pageSkeleton.vue'

// 触底重新请求 猜你喜欢 列表数据
const myCommonGuessRef = ref(null)
const handleScrollToLower = () => {
  myCommonGuessRef.value?.getMoreData()
}

// 获取分类数据
const categoryList = ref([])
const fetchCategoryMultiData = async () => {
  const res = await getHomeCategoryMutliAPI()
  categoryList.value = res.result
}

// 热门推荐
const HotInfoList = ref([])
const fetchHotInfoData = async () => {
  const res = await getHomeHotMutliAPI()
  HotInfoList.value = res.result
}

const isPageLoading = ref(false)
onLoad(async () => {
  isPageLoading.value = true
  await Promise.all([fetchCategoryMultiData(), fetchHotInfoData()])
  isPageLoading.value = false
})

const myCommonSwiperRef = ref(null)

// 上拉刷新
const isTriggered = ref(false)
const handleRefresh = async () => {
  isTriggered.value = true

  myCommonGuessRef.value?.resetStatus()
  // myCommonSwiperRef.value?.resetBanner()

  // async结合Promise.all实现链式调用
  await Promise.all([
    fetchCategoryMultiData(),
    fetchHotInfoData(),
    myCommonSwiperRef.value?.fetchBannerData(1),
    myCommonGuessRef.value?.getMoreData(),
  ])

  isTriggered.value = false
}
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
