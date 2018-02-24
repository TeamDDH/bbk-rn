import { urlPrefixTopic } from './consts'
import { Topic } from '../models'

export const fetchNewTopicsInPage = function(pageNumber) {
  let url = `${urlPrefixTopic}?page_num=${pageNumber}`
  return fetch(url)
    .then(response => response.json())
    .then(res => {
      const newFetchedTopics = res.topics
      const newTopics = []
      newFetchedTopics.forEach(item => {
        newTopics.push(
          new Topic({
            id: item._id,
            title: item.title,
            desc: item.desc
          })
        )
      })
      return newTopics
    })
}
