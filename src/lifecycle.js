import { store, cache } from './store'
import * as actions from './store/actions'

export const appDidMount = function() {
  prepareAuthInfo()
}

const prepareAuthInfo = function() {
  cache
    .load({ key: 'authInfo' })
    .then(authInfo => {
      store.dispatch(actions.setUser(authInfo.user))
      store.dispatch(actions.setToken(authInfo.token))
    })
    .catch(err => console.log(err.name))
}
