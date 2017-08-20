import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'
import Api from '../api/index'
var api = new Api()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_project_id: 'test',
    rules: api.rules,
    default_rule: '',
    project_order: ['test'],
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
        name: 'Default Project',
        key: 'C Major',
        default_rule: '',
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
