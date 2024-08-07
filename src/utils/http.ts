import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 拼接基础url地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 修改超时时间 默认60s改成10s
    options.timeout = 10000
    // 添加请求头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 如果登录设置token
    const token = useMemberStore().profile?.token
    if (token) {
      options.header['Authorization'] = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// 自定义一个请求函数 处理成功与失败
export const http = (options: UniApp.RequestOptions) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      // 请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else if (res.statusCode === 401) {
          // 处理登录失败401错误
          useMemberStore().clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          uni.showToast({
            icon: 'none',
            title: res.data?.msg || '接口报错了',
          })
          reject(res)
        } else {
          // 处理通用错误
          uni.showToast({
            icon: 'none',
            title: res.data?.msg || '请求错误',
          })
        }
      },
      // 请求失败
      fail(err) {
        // 处理网络错误与服务器错误
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
