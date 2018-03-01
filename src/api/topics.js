import { urlPrefixTopic } from './consts'

export const fetchNewTopicsInPage = function(pageNumber) {
  let url = `${urlPrefixTopic}?page_num=${pageNumber}`
  return fetch(url).then(response => response.json())
}
