import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const authInfo = function(state = {}, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user }
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.token }
    case actionTypes.UN_AUTH:
      return {}
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
  authInfo,
  topics,
  articles
})
