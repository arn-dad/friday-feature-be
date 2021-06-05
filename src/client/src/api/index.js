import axios from './axios'
import { Feature } from './getaways';

class Api {
  
  constructor() {
    this.feature = new Feature();
  }

  setAuthorizationToken(token) {
    if (token) {
      axios.defaults.headers['Authorization'] = token
    }
  }

  removeAuthorizationToken() {
    delete axios.defaults.headers['Authorization']
  }
}

export default new Api()