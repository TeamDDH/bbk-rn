export const find = function(key: string, array: Array, value: Array) {
  if (value === null || value === undefined) return null
  let ret
  array.forEach(element => {
    if (element[key] === value) {
      ret = element
    }
  })
  return ret
}

export const merge = function(key: string, preArray, postArray) {}
