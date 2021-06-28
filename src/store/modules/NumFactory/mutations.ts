import { DOUBLE_COUNT } from '@/store/modules/NumFactory/constant'
import { stateType } from '@/store/modules/NumFactory/state'

const mutations = {
  [DOUBLE_COUNT](state: stateType, payload: number): void {
    state.count = payload
  }
}
export default mutations
