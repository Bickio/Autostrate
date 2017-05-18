import Vue from 'vue'

export default {
  addColumn (state, projectId) {
    let timestamp = Date.now()
    let id = 'c_' + timestamp
    let column = {
      id,
      chord: '',
      melody: '',
      rule: state.defaultRule
    }
    Vue.set(state.projects[projectId].columns, id, column)
  },
  updateColumn (state, [projectId, key, column]) {
    state.projects[projectId].columns[key] = column
  }
}
