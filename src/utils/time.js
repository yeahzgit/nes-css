import moment from 'moment'

const startTime = '2022年7月31日'

// const commemorationDay = {
//   '9月5日': {
//     message: '今天又是平平无奇的一天呀'
//   },
//   '9月10日': {
//     message: '哇塞塞，今天是教师节啦'
//   },
//   '1月1日': {
//     message: '元旦'
//   }
// }
const specialDay = {
  '9月5日': {
    message: '今天又是平平无奇的一天呀'
  },
  '9月10日': {
    message: '哇塞塞，今天是教师节啦'
  },
  '1月1日': {
    message: '元旦'
  }
}

export const getDateInfo = () => {
  const currentDate = moment().format('YYYY年M月D日')
  return {
    currentDate,
    specialDayInfo: specialDay[moment().format('M月D日')]
  }
}