import api from '@/api'
import router from '@/router/'
import axios from 'axios'
import { dataUrl } from '@/api/utils'
// initial state
const state = () => ({
  features : [],
  loading  : false,
  creating : false,
  updating : false,
  selected : null,
  deleting : false,
})

// getters
const getters = {}

// actions
const actions = {
  getFeatures({ commit, state }, query) {
    commit('GET_FEATURES_REQUEST')
    api.feature.getAll().then((result) => {
      commit('GET_FEATURES_FULFILLED', result.data)
    }).catch((err) => {
      commit('GET_FEATURES_FAILURE')
    });
  },
  createFeature({ commit, state }, data) {
    commit('CREATE_FEATURE_REQUEST')
    api.feature.create({ data }).then((result) => {
      commit('CREATE_FEATURE_FULFILLED', result.data)
      router.push("/features");
    }).catch((err) => {
      commit('CREATE_FEATURE_FAILURE')
    });
  },
  updateFeature({ commit, state }, data) {
    commit('UPDATE_FLAG_STATUS_REQUEST')
    api.feature.update({ data }).then((result) => {
      commit('UPDATE_FLAG_STATUS_FULFILLED', result.data)
    }).catch((err) => {
      commit('UPDATE_FLAG_STATUS_FAILURE')
    });
  },

  deleteFeature({ commit, state }, id) {
    commit('DELETE_FLAG_STATUS_REQUEST')
    api.feature.delete({ pathParams: [id] })
    .then((result) => {
      commit('DELETE_FLAG_STATUS_FULFILLED', result)
      router.push("/features");
    }).catch((err) => {
      commit('DELETE_FLAG_STATUS_FAILURE')
    });
  }

}

// mutations
const mutations = {
  GET_FEATURES_REQUEST(state) {
    state.loading = true
  },
  GET_FEATURES_FULFILLED(state, features) {
    state.features = features
    state.loading = false
  },
  GET_FEATURES_FAILURE(state) {
    state.loading = false
  },
  CREATE_FEATURE_REQUEST() {
    state.creating = true
  },
  CREATE_FEATURE_FULFILLED() {
    state.creating = false
  },
  CREATE_FEATURE_FAILURE() {
    state.creating = false
  },
  SELECT_FEATURE(state, feature) {
    state.selected = feature
  },
  UPDATE_FLAG_STATUS_REQUEST() {
    state.updating = true
  },
  UPDATE_FLAG_STATUS_FULFILLED(state, feature) {
    state.updating = false
    state.selected = feature
  },
  UPDATE_FLAG_STATUS_FAILURE() {
    state.updating = false
  },
  DELETE_FLAG_STATUS_REQUEST() {
    state.deleting = true
  },
  DELETE_FLAG_STATUS_FULFILLED(state) {
    state.deleting = false
  },
  DELETE_FLAG_STATUS_FAILURE() {
    state.deleting = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}