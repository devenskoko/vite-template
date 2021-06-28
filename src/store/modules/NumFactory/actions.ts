import { DOUBLE_COUNT } from '@/store/modules/NumFactory/constant'
import { ActionContext } from 'vuex'
import { stateType } from '@/store/modules/NumFactory/state'
import { AllStateTypes } from '@/store/types'

const actions = {
  [DOUBLE_COUNT]({ commit }: ActionContext<stateType, AllStateTypes>): void {
    commit(DOUBLE_COUNT, 2)
  }
}

export default actions
