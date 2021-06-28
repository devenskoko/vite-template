import { stateType } from '@/store/modules/Axios/state'

const getters = {
  userInfo(state: stateType): object {
    return state.userInfo
  }
}

export default getters
