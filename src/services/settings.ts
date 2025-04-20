import type { ProfileDetail } from '@/types/member.t'
import { http } from '@/utils/http.ts'

// 获取个人信息
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

// 修改个人信息
export const setMemberProfileAPI = (data) => {
  return http({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}

// 修改用户头像
export const setMemberProfileAvatarAPI = (data) => {
  return http({
    method: 'POST',
    url: '/member/profile/avatar',
    data,
  })
}
