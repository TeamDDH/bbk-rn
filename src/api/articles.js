import { urlPrefixArticle } from './consts'
import { Article } from '../models'

export const fetchArticlesInTopic = function(topicId, pageNumber) {
  const url = `${urlPrefixArticle}?topic_id=${topicId}&page_num=${pageNumber}`
  return fetch(url)
    .then(response => response.json())
    .then(res => {
      const newFetchedArticles = res.articles
      const newArticles = []
      newFetchedArticles.forEach(item => {
        newArticles.push(
          new Article({
            id: item._id,
            title: item.title,
            desc: item.desc
          })
        )
      })
      return newArticles
    })
}
