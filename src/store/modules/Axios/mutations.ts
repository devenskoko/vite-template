import { AXIOS_DATA } from './constant'
import { stateType } from '@/store/modules/Axios/state'
import XPoet from '@/store/modules/Axios/apiTypes'

const mutations = {
  [AXIOS_DATA](state: stateType, payload: XPoet) {
    state.userInfo = payload
  }
}

export default mutations
