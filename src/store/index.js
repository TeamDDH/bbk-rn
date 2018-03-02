import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'
import { createStore } from 'redux'
import reducers from './reducers'

// State
export const store = createStore(reducers)

// Persist
const ONE_WEEK = 1000 * 3600 * 24 * 7

export const persist = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: ONE_WEEK,
  enableCache: true
})
