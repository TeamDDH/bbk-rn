import { urlPrefixTopic } from './consts'
import { Topic } from '../models'

export const fetchNewTopicsInPage = function(pageNumber) {
  const url = `${urlPrefixTopic}?page_num=${pageNumber}`
  return fetch(url)
    .then(response => response.json())
    .then(res => {
      const { topics, has_next } = res
      const newTopics = []
      topics.forEach(item => {
        newTopics.push(
          new Topic({
            id: item._id,
            title: item.title,
            desc: item.desc,
            timeUpdated: item.updated_datetime
          })
        )
      })
      return { newTopics, hasNext: has_next }
    })
}
