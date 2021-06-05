import Service from './service'
import { dataUrl } from '../utils';

export class Feature extends Service {
  endpoint = 'feature'

  #routes = {
    main: '/api/v1/feature'
  }

  getAll(options) {
    return this._get(this.#routes.main, options)
  }

  getById(options) {
    return this._get(this.#routes.main, options)
  }

  create(options) {
    return this._post(this.#routes.main, options)
  }

  update(options) {
    return this._put(this.#routes.main, options)
  }

  delete({ pathParams,  ...options }) {
    return this._delete(`${this.#routes.main}/${dataUrl(pathParams)}`, options)
  }
}