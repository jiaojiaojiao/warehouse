import axios from 'axios'

export default axios.create({
  baseURL: 'http://116.62.30.175:8004/',
  timeout: 3000
})
