// @flow

import * as actionTypes from './actionTypes'
import { Article, Topic } from '../models'

export const setUser = user => ({
  type: actionTypes.SET_USER,
  user
})
export const setUsername = username => ({
  type: actionTypes.SET_USERNAME,
  username
})
export const setToken = token => ({
  type: actionTypes.SET_TOKEN,
  token
})
export const setExpireDate = date => ({
  type: actionTypes.SET_TOKEN_EXPIRE_DATE,
  date
})

export const addTopics = (topics: Array<Topic>) => ({
  type: actionTypes.ADD_TOPICS,
  topics
})
export const replaceAllTopics = topics => ({
  type: actionTypes.REPLACE_ALL_TOPICS,
  topics
})

export const addArticles = (articles: Array<Article>) => ({
  type: actionTypes.ADD_ARTICLES,
  articles
})
