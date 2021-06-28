import { InjectionKey } from 'vue'

export interface UserInfo {
  id: number
  name: string
}

export const injectionKeyUser: InjectionKey<UserInfo> = Symbol()
