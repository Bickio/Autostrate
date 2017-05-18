import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentProjectID: 'test',
    defaultRule: 'drop-2',
    projects: {
      /*
      id: {
        id,
        name,
        key,
        default_rule,
        instruments: {
          id: {
            id,
            name,
            key,
            clef
          }
        },
        columns: {
          id: {
            id,
            chord,
            melody,
            rule
          }
        }
      }
      */
      test: {
        id: 'test',
        name: 'boaty mcboatface',
        key: 'A major',
        default_rule: 'in the land of mules',
        instruments: {
          test_instrument_id: {
            id: 'test_instrument_id',
            name: 'trumpet',
            key: 'Bb',
            clef: 'treble'
          }
        },
        columns: {
        }
      }
    }
  },
  mutations,
  actions,
  getters
})
