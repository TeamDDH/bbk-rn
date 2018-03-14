import moment from 'moment'

moment.locale('zh-cn')

export const dateFormmater = function(date) {
  return moment(date).format('YYYY-MM-DD h:mm:ss')
}
