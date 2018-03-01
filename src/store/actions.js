import * as actionTypes from './actionTypes'
import { Article, Topic } from '../models'

export const setUser = (user: Object) => ({
  type: actionTypes.SET_USER,
  user
})
export const setUsername = (username: string) => ({
  type: actionTypes.SET_USERNAME,
  username
})
export const setToken = (token: string) => ({
  type: actionTypes.SET_TOKEN,
  token
})
export const setExpireDate = (date: string | number) => ({
  type: actionTypes.SET_TOKEN_EXPIRE_DATE,
  date
})

export const addTopics = (topics: Array<Topic>) => ({
  type: actionTypes.ADD_TOPICS,
  topics
})
export const replaceAllTopics = (topics: Array<Topic>) => ({
  type: actionTypes.REPLACE_ALL_TOPICS,
  topics
})

export const addArticles = (articles: Array<Article>) => ({
  type: actionTypes.ADD_ARTICLES,
  articles
})
