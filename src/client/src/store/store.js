import Vue from 'vue'
import Vuex from 'vuex'
import features from './modules/features.js'

Vue.use(Vuex)

Vue.config.devtools = true


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    features
  }
});