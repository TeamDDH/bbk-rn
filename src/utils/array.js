// @flow

export const find = (key: string, array: Array, value: any) => {
  if (value === null || value === undefined) return null
  let ret
  array.forEach(element => {
    if (element[key] === value) {
      ret = element
    }
  })
  return ret
}
