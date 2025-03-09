<script setup>
import { getCategoryTopApi } from '@/services/category'
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
import categorySkeleton from './categorySkeleton'

const CategoryTopList = ref([])
const activeIndex = ref(0)
const showLoading = ref(false)
const getCategoryTopData = async () => {
  try {
    showLoading.value = true
    const res = await getCategoryTopApi()
    CategoryTopList.value = res.result
  } catch (error) {
    console.log(error)
  } finally {
    showLoading.value = false
  }
}

const currentSubCategory = computed(() => CategoryTopList.value[activeIndex.value]?.children || [])

onLoad(() => {
  getCategoryTopData()
})
</script>

<template>
  <view class="viewport" v-if="!showLoading">
    <!-- 搜索框 -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view v-if="!showLoading">
          <view
            class="item"
            v-for="(item, index) in CategoryTopList"
            :key="item"
            :class="{ active: index === activeIndex }"
            @tap="activeIndex = index"
          >
            <text class="name"> {{ item.name }} </text>
          </view>
        </view>
        <image
          v-else
          class="my-loading-icons"
          style="width: 20px; height: 20px"
          src="https://ts1.cn.mm.bing.net/th/id/R-C.23dacc3c95d73df0b3c902f53854c1d9?rik=ms%2fr%2fL%2bb%2bKAMbQ&riu=http%3a%2f%2fpic.616pic.com%2fys_img%2f00%2f54%2f47%2fum3xUfY3JS.jpg&ehk=IZhkPZwGh3lUpUjbM09jsbUn%2bkynW%2ffj72pvejPy420%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
        ></image>
      </scroll-view>
      <!-- 右侧：二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <!-- 轮播图 -->
        <myCommonSwiper :pageType="2" ref="myCommonSwiperRef" />
        <!-- 内容区域 -->
        <view class="panel" v-for="item in currentSubCategory" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <navigator class="more" hover-class="none" url="pages/category/category"
              >全部</navigator
            >
          </view>
          <view class="section">
            <navigator
              v-for="goods in item.goods"
              :key="goods.id"
              class="goods"
              hover-class="none"
              :url="`/pages/goods/goods?id=${goods.id}`"
            >
              <image class="image" :src="goods.picture"></image>
              <view class="name ellipsis">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <categorySkeleton v-else />
</template>

<style lang="scss">
@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.my-loading-icons {
  animation: rotateAnimation 2s linear infinite; /* 应用动画 */
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 200rpx auto auto;
  bottom: 0;
  opacity: 0.6;
}
page {
  height: 100%;
  overflow: hidden;
}
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.search {
  padding: 0 30rpx 20rpx;
  background-color: #fff;
  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64rpx;
    padding-left: 26rpx;
    color: #8b8b8b;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: #f3f4f4;
  }
}
.icon-search {
  &::before {
    margin-right: 10rpx;
  }
}
/* 分类 */
.categories {
  flex: 1;
  min-height: 400rpx;
  display: flex;
}
/* 一级分类 */
.primary {
  overflow: hidden;
  width: 180rpx;
  flex: none;
  background-color: #f6f6f6;
  position: relative;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96rpx;
    font-size: 26rpx;
    color: #595c63;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 42rpx;
      bottom: 0;
      width: 96rpx;
      border-top: 1rpx solid #e3e4e7;
    }
  }
  .active {
    background-color: #fff;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8rpx;
      height: 100%;
      background-color: #27ba9b;
    }
  }
}
.primary .item:last-child::after,
.primary .active::after {
  display: none;
}
/* 二级分类 */
.secondary {
  background-color: #fff;
  .carousel {
    height: 200rpx;
    margin: 0 30rpx 20rpx;
    border-radius: 4rpx;
    overflow: hidden;
  }
  .panel {
    margin: 0 30rpx 0rpx;
  }
  .title {
    height: 60rpx;
    line-height: 60rpx;
    color: #333;
    font-size: 28rpx;
    border-bottom: 1rpx solid #f7f7f8;
    .more {
      float: right;
      padding-left: 20rpx;
      font-size: 24rpx;
      color: #999;
    }
  }
  .more {
    &::after {
      font-family: 'erabbit' !important;
      content: '\e6c2';
    }
  }
  .section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0;
    .goods {
      width: 150rpx;
      margin: 0rpx 30rpx 20rpx 0;
      &:nth-child(3n) {
        margin-right: 0;
      }
      image {
        width: 150rpx;
        height: 150rpx;
      }
      .name {
        padding: 5rpx;
        font-size: 22rpx;
        color: #333;
      }
      .price {
        padding: 5rpx;
        font-size: 18rpx;
        color: #cf4444;
      }
      .number {
        font-size: 24rpx;
        margin-left: 2rpx;
      }
    }
  }
}
</style>
