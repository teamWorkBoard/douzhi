import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/pages/Movies'
import MovieDetails from '@/pages/MovieDetails'
import MovieSearch from '@/pages/MovieSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/details/:id',
      name: 'MovieDetails',
      component: MovieDetails
    },
    {
      path: '/search',
      name: 'MovieSearch',
      component: MovieSearch
    }
  ]
})
