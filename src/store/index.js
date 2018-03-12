import { createStore } from 'redux'
import reducers from './reducers'

export { cache } from './cache'
export const store = createStore(reducers)
