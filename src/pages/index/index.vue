<template>
  <!-- 导航 -->
  <CustomerNavbar />
  <!-- 轮播图 -->
  <myCommonSwiper :pageType="1" />
  <!-- 分类 -->
  <CustomerCategory :list="categoryList" />

  hello rita
</template>

<script setup>
import { ref } from 'vue'
import CustomerNavbar from './components/CustomerNavbar.vue'
import CustomerCategory from './components/CustomerCategory.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeCategoryMutliAPI } from '@/services/home'

// 获取分类数据
const categoryList = ref([])
const fetchCategoryMultiData = async () => {
  const res = await getHomeCategoryMutliAPI()
  categoryList.value = res.result
  console.log('fetchCategoryMultiData', categoryList.value)
}

onLoad(() => {
  fetchCategoryMultiData()
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
