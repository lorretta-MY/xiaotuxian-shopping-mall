<script setup>
import { ref } from 'vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'

const props = defineProps({
  pageType: {
    type: Number,
    default: 1, // 1首页 2分类页
  },
})

const activeIndex = ref(0)
const onSwiperChange = (e) => {
  activeIndex.value = e.detail.current
}

// 获取数据
const bannerList = ref([])
const fetchBannerData = async () => {
  const res = await getHomeBannerAPI(props.pageType)
  bannerList.value = res.result
  console.log('fetchBannerData', bannerList.value)
}

onLoad(() => {
  fetchBannerData()
})
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="onSwiperChange">
      <swiper-item v-for="banner in bannerList" :key="banner.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="banner.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in bannerList.length"
        :key="item"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
/* 轮播图 */
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
