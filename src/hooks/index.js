import { ref } from 'vue'

/**
 * 猜你喜欢的组合式函数
 * @returns
 */
export const useGuessList = () => {
  // 触底重新请求 猜你喜欢 列表数据
  const myCommonGuessRef = ref(null)
  const handleScrollToLower = () => {
    myCommonGuessRef.value?.getMoreData()
  }
  return {
    myCommonGuessRef,
    handleScrollToLower,
  }
}
