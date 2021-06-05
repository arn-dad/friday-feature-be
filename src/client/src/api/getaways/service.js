import axios from '../axios'

export default class Service {
  _get(url, opt = {}) {
    return axios({ method: 'GET', url, ...opt })
  }

  _post(url, opt = {}) {
    return axios({ method: 'POST', url, ...opt })
  }

  _delete(url, opt = {}) {
    return axios({ method: 'DELETE', url, ...opt })
  }

  _put(url, opt = {}) {
    return axios({ method: 'PUT', url, ...opt })
  }

  _patch(url, opt = {}) {
    return axios({ method: 'PATCH', url, ...opt })
  }
}