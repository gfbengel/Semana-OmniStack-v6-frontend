import axios from 'axios'

const api = axios.create({
  baseURL:'https://omni-v6-backend.herokuapp.com',
})

export default api