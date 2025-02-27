<template name="skeleton">
  <view class="sk-container">
    <scroll-view refresher-enabled="true" scroll-y="true" style="flex: 1">
      <view is="components/myCommonSwiper" class="r">
        <view class="carousel myCommonSwiper--carousel">
          <swiper circular="true" interval="3000" current="0" autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator class="navigator myCommonSwiper--navigator" hover-class="none">
                <image class="image myCommonSwiper--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view class="indicator myCommonSwiper--indicator">
            <text class="dot myCommonSwiper--dot active myCommonSwiper--active"></text>
            <text class="dot myCommonSwiper--dot"></text>
            <text class="dot myCommonSwiper--dot"></text>
            <text class="dot myCommonSwiper--dot"></text>
            <text class="dot myCommonSwiper--dot"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/CustomerCategory">
        <view class="category CustomerCategory--category">
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-275 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-928 sk-text"
              >锦鲤</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-158 sk-text"
              >服饰</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-591 sk-text"
              >母婴</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-101 sk-text"
              >个护</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-68 sk-text"
              >严选</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-177 sk-text"
              >数码</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-163 sk-text"
              >运动</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-68 sk-text"
              >杂项</text
            >
          </navigator>
          <navigator class="category-item CustomerCategory--category-item" hover-class="none">
            <image class="icon CustomerCategory--icon sk-image"></image>
            <text class="text CustomerCategory--text sk-transparent sk-text-14-2857-827 sk-text"
              >品牌</text
            >
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/CustomerHotPanel">
        <view class="panel CustomerHotPanel--panel hot CustomerHotPanel--hot">
          <view class="item CustomerHotPanel--item">
            <view class="title CustomerHotPanel--title">
              <text
                class="title-text CustomerHotPanel--title-text sk-transparent sk-text-14-2857-689 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc CustomerHotPanel--title-desc sk-transparent sk-text-14-2857-627 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator class="cards CustomerHotPanel--cards" hover-class="none">
              <image class="image CustomerHotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image CustomerHotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item CustomerHotPanel--item">
            <view class="title CustomerHotPanel--title">
              <text
                class="title-text CustomerHotPanel--title-text sk-transparent sk-text-14-2857-325 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc CustomerHotPanel--title-desc sk-transparent sk-text-14-2857-467 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator class="cards CustomerHotPanel--cards" hover-class="none">
              <image class="image CustomerHotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image CustomerHotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item CustomerHotPanel--item">
            <view class="title CustomerHotPanel--title">
              <text
                class="title-text CustomerHotPanel--title-text sk-transparent sk-text-14-2857-859 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc CustomerHotPanel--title-desc sk-transparent sk-text-14-2857-270 sk-text"
                >精心优选</text
              >
            </view>
            <navigator class="cards CustomerHotPanel--cards" hover-class="none">
              <image class="image CustomerHotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image CustomerHotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item CustomerHotPanel--item">
            <view class="title CustomerHotPanel--title">
              <text
                class="title-text CustomerHotPanel--title-text sk-transparent sk-text-14-2857-239 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc CustomerHotPanel--title-desc sk-transparent sk-text-14-2857-238 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator class="cards CustomerHotPanel--cards" hover-class="none">
              <image class="image CustomerHotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image CustomerHotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </view>
      </view>
      <view is="components/myCommonGuess" class="r">
        <view class="caption myCommonGuess--caption"></view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-273 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-170 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-275 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-928 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-158 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-591 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-101 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-68 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-177 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-163 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-827 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-689 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-627 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-325 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-467 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-859 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-270 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-239 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-238 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
