import Vue from 'vue'

export default {
  updateProjectProperty (state, [projectId, property, value]) {
    state.projects[projectId][property] = value
  },
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
    state.projects[projectId].column_order.push(id)
  },
  updateColumn (state, [projectId, key, column]) {
    state.projects[projectId].columns[key] = column
  },
  removeColumn (state, [projectId, columnId]) {
    Vue.delete(state.projects[projectId].columns, columnId)
    var index = state.projects[projectId].column_order.indexOf(columnId)
    Vue.delete(state.projects[projectId].column_order, index)
  },
  updateProjectDefaultRule (state, [projectId, rule]) {
    state.projects[projectId].default_rule = rule
  }
}
