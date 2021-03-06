import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // import locale
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn') // use locale

Vue.filter('relativeTime', value => {
  return dayjs(value).from(dayjs())
})
