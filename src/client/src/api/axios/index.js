import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 35000,
  headers: {
    Authorization: 'xxx',
    client: 'xxx'
  }
})