import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'

const ONE_WEEK = 1000 * 3600 * 24 * 7
const ONE_DAY = 1000 * 3600 * 24
const HALF_YEAR = ONE_DAY * 180

export const cache = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: ONE_WEEK,
  enableCache: true
})
