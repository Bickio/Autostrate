import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: {
      1: {
        name: 'project1',
        bars: [
          { melody: 'A', chord: 'Dm' },
          { melody: 'B', chord: 'G7' }
        ]
      },
      2: {name: 'project2'}
    }
  },
  getters,
  actions,
  mutations
})
