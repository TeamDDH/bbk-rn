import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const user = function(state = {}, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return action.user
    case actionTypes.SET_TOKEN:
      return Object.assign({}, state, { token: action.token })
    case actionTypes.SET_USERNAME:
      return Object.assign({}, state, { username: action.username })
    default:
      return state
  }
}

const topics = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TOPIC:
      return [...state, ...action.topics]
    default:
      return state
  }
}

const articles = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      return [...state, ...action.articles]
    default:
      return state
  }
}

export default combineReducers({
  user,
  topics,
  articles
})
