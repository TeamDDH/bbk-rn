import { urlPrefixTopic } from './consts'

export const fetchNewTopicsInPage = function(pageNumber) {
  const url = `${urlPrefixTopic}?page_num=${pageNumber}`
  return fetch(url).then(response => response.json())
}
