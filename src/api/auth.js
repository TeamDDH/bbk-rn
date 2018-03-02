import { urlPrefixLogin, urlPrefixRegister } from './consts'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const authUser = function(type, params) {
  const url = type === 'login' ? urlPrefixLogin : urlPrefixRegister
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(params)
  })
    .then(response => response.json())
    .then(res => (res.message ? Promise.reject(res.message) : res))
}
