import { stateType } from '@/store/modules/NumFactory/state'

const getters = {
  count(state: stateType): number {
    return state.count
  }
}

export default getters
