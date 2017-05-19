import Vue from 'vue'

export default {
  addColumn (state, projectId) {
    let timestamp = Date.now()
    let id = 'c_' + timestamp
    let column = {
      id,
      chord: '',
      melody: '',
      rule: state.projects[projectId].default_rule
    }
    Vue.set(state.projects[projectId].columns, id, column)
  },
  updateColumn (state, [projectId, key, column]) {
    state.projects[projectId].columns[key] = column
  },
  updateProjectDefaultRule (state, [projectId, rule]) {
    state.projects[projectId].default_rule = rule
  }
}
