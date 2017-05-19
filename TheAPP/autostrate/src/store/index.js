import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentProjectID: 'test',
    rules: {
      /*
      id: {
        id,
        name,
        rule function
      }
      */
      r_12345: {
        id: 'r_12345',
        name: 'test',
        rule: 'placeholder'
      },
      r_54321: {
        id: 'r_54321',
        name: 'drop 2',
        rule: 'placeholder'
      }
    },
    default_rule: 'r_12345',
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
        default_rule: 'r_54321',
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
