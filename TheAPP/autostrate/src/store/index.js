import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_project_id: 'test',
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
        instrument_order: [],
        instruments: {
          id: {
            id,
            name,
            key,
            clef
          }
        },
        column_list: [id, id...]
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
        name: 'Boaty McBoatface',
        key: 'A major',
        default_rule: 'r_54321',
        instrument_order: [],
        instruments: {
        },
        column_order: [],
        columns: {
        }
      }
    }
  },
  mutations,
  actions,
  getters
})
