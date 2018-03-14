import { urlPrefixArticle } from './consts'
import { Article } from '../models'

export const fetchArticlesInTopic = function(topicId, pageNumber) {
  const url = `${urlPrefixArticle}?topic_id=${topicId}&page_num=${pageNumber}`

  return fetch(url)
    .then(response => response.json())
    .then(res => {
      if (res.code) {
        return Promise.reject({ code: res.code, message: res.message })
      }

      const { articles } = res
      const newArticles = []
      articles.forEach(article => {
        newArticles.push(
          new Article({
            id: article._id,
            title: article.title,
            content: article.content,
            url: article.uri,
            timeUpdated: article.time_updated
          })
        )
      })
      return newArticles
    })
}
