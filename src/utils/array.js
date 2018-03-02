export const find = function(key, array, value) {
  if (value === null || value === undefined) return null
  let ret
  array.forEach(element => {
    if (element[key] === value) {
      ret = element
    }
  })
  return ret
}

export const merge = function(key, preArray, postArray) {}
