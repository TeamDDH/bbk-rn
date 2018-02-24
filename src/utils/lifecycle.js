/**
 * @flow
 * Methods that would be triggered during the app's life cycle.
 */

// import { getUserInfo } from '../store'

export const prepareUserInfo = function() {
  // getUserInfo().then(userInfo => {
  //   if (userInfo === null) return
  // })
}

export const appDidMount = function() {
  prepareUserInfo()
}
