import { createStore } from 'vuex'

import numFactoryModule from './modules/NumFactory'
import axiosModule from './modules/Axios'

export const store = createStore({
  modules: {
    numFactoryModule,
    axiosModule
  }
})
