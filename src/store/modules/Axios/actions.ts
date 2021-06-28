import { ActionContext } from 'vuex'
import { stateType } from '@/store/modules/Axios/state'
import { AllStateTypes } from '@/store/types'
import axios from '@/utils/axios'
import XPoet from '@/store/modules/Axios/apiTypes'

const actions = {
  AXIOS_DATA({ commit }: ActionContext<stateType, AllStateTypes>): void {
    axios
      .get('/users/XPoet')
      .then((response) => {
        const result: XPoet = response.data
        console.log('response: ', result)
        commit('AXIOS_DATA', result)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export default actions
