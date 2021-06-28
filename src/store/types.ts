import { stateType as NumType } from './modules/NumFactory/state'
import { stateType as AxiosType } from './modules/Axios/state'

export interface AllStateTypes {
  numFactoryModule: NumType,
  axiosModule: AxiosType
}
