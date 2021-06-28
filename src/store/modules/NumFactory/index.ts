import { Module } from 'vuex'
import { AllStateTypes } from '../../types'
import { state, stateType } from '@/store/modules/NumFactory/state'
import mutations from '@/store/modules/NumFactory/mutations'
import actions from '@/store/modules/NumFactory/actions'
import getters from '@/store/modules/NumFactory/getters'

// Create a new store Modules.
const numFactoryModule: Module<stateType, AllStateTypes> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default numFactoryModule
