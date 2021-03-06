import axios from 'axios'

// state
const state = {
  list: [{
    title: '',
    mainland_pubdate: '',
    images: {}
  }],
  currentMovie: {

  },
  searchMovie: []
}

// mutations
/* eslint-disable no-param-reassign */
const mutations = {
  setMovies(data, movieList) {
    data.list = movieList
  },
  setCurrentMovie(data, currentMovie) {
    data.currentMovie = currentMovie
  },
  setSearchMovie(data, searchMovie) {
    data.searchMovie = searchMovie.subjects
  }
}
/* eslint-enable no-param-reassign */

// actions
const actions = {
  async getMovies({ commit }) {
    const res = await axios.get('/api/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=999&client=&udid=')
    const movieList = res.data.subjects
    commit('setMovies', movieList)
  },

  async getMovie({ commit }, id) {
    const res = await axios.get(`/api/movie/subject/${id}`)
    commit('setCurrentMovie', res.data)
  },

  async getSearchMovie({ commit }, searchValue) {
    const res = await axios.get(`/api/movie/search?q=${searchValue}&count=999`)
    commit('setSearchMovie', res.data)
  }
}

export default {
  state,
  mutations,
  actions
}
