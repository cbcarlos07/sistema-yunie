import axios from 'axios'
import env from '../environments'

const api = axios.create({
    baseURL: `${env.host.dev}`
})

export default api