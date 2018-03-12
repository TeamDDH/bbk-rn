export class Article {
  constructor({ id, title, desc, timeUpdated, url }) {
    this.id = id
    this.title = title
    this.desc = desc
    this.timeUpdated = timeUpdated
    this.url = url
  }
}

export class Topic {
  constructor({ id, title, desc, timeUpdated }) {
    this.id = id
    this.title = title
    this.desc = desc
    this.timeUpdated = timeUpdated
  }
}
