import { Module } from 'vuex'
import XPoet from '@/store/modules/Axios/apiTypes'
import { AllStateTypes } from '@/store/types'
import axios from '@/utils/axios'
import { state, stateType } from '@/store/modules/Axios/state'
import mutations from './mutations'
import actions from '@/store/modules/Axios/actions'
import getters from '@/store/modules/Axios/getters'
const AxiosModule: Module<stateType, AllStateTypes> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default AxiosModule
