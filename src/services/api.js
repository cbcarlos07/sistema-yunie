import axios from 'axios'
import env from '../environments'
console.log('env',env);
 const setAuthToken = token => {
    if (token) {
    //applying token
    api.defaults.headers['x-access-token'] = token;
    } else {
    //deleting the token from header
    delete api.defaults.headers['x-acess-token'];
    }
   }




const api = axios.create({
    baseURL: env.host.dev,
   
})

export {api, setAuthToken}