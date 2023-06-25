import axios from 'axios'

const api = axios.create({
  baseURL: 'https://type.fit/api',
})

export default api
