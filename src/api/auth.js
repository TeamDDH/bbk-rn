import { urlPrefixLogin, urlPrefixRegister } from './consts'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const login = function(username: string, password: string) {
  return fetch(urlPrefixLogin, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      username,
      password
    })
  }).then(response => response.json())
}

export const register = function(username: string, password: string) {
  return fetch(urlPrefixRegister, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      username,
      password
    })
  })
}
