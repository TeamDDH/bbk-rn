import { createStore } from 'redux'
import reducers from './reducers'

const generateInitState = () => ({
  user: {
    username: '',
    token: ''
  },
  topics: [],
  articles: []
})

export const store = createStore(reducers, generateInitState())
