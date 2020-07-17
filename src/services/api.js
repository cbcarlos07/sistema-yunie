import axios from 'axios'
import env from '../environments'

const api = axios.create({
    baseURL: `http://${env.host}`
})

export default api