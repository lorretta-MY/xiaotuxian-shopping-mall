<script setup lang="ts">
import { getHotLikeAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

// const props = defineProps<{ type: string }>()
const props = defineProps({
  type: String,
})
// 动态设置当前页面的标题。
const currentHotMap = hotMap.find((v) => v.type === props.type)
uni.setNavigationBarTitle({ title: currentHotMap?.title })

const currentHotData = ref({})
const currentIndex = ref(0)
const getHotLikeData = async () => {
  try {
    const res = await getHotLikeAPI(currentHotMap?.url, {
      page: process.env.NODE_ENV === 'development' ? 32 : 1,
      pageSize: 10,
    })
    currentHotData.value = res.result
  } catch (error) {
    throw new Error(error)
  }
}
onLoad(() => {
  getHotLikeData()
})

const onScrolltolower = async () => {
  try {
    // 获取当前tab分类
    const currentSubtype = currentHotData.value?.subTypes[currentIndex.value]
    if (currentSubtype.goodsItems.page < currentSubtype.goodsItems.pages) {
      currentSubtype.goodsItems.page++
    } else {
      currentSubtype.isFinish = true
      return
    }
    const res = await getHotLikeAPI(currentHotMap?.url, {
      id: currentSubtype.id,
      page: currentSubtype.goodsItems.page,
      pageSize: currentSubtype.goodsItems.pageSize,
    })
    // 新旧数据拼接
    const newSubtype = res.result.subTypes[currentIndex.value]
    currentSubtype.goodsItems.items.push(...newSubtype.goodsItems.items)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="currentHotData.bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        class="text"
        v-for="(tab, tabIndex) in currentHotData.subTypes"
        :key="tab.id"
        :class="{ active: tabIndex === currentIndex }"
        @tap="currentIndex = tabIndex"
        >{{ tab.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      v-show="index === currentIndex"
      class="scroll-view"
      v-for="(item, index) in currentHotData.subTypes"
      :key="item.id"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{
        item.isFinish ? '糟糕，没有更多数据啦~' : '正在加载中...'
      }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
