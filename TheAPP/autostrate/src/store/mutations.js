import Vue from 'vue'

// Helper functions for mutations (to remove duplicate code)
function createId (prefix) {
  let timestamp = Date.now()
  let id = prefix + '_' + timestamp
  return id
}
function insertColumn (state, projectId, index) {
  let id = createId('c')
  let column = {
    id,
    chord: '',
    melody: '',
    rule: state.projects[projectId].default_rule
  }
  Vue.set(state.projects[projectId].columns, id, column)
  state.projects[projectId].column_order.splice(index, 0, id)
}

export default {
  updateProjectProperty (state, [projectId, property, value]) {
    state.projects[projectId][property] = value
  },
  pushColumn (state, projectId) {
    let index = state.projects[projectId].column_order.length // end of columns
    insertColumn(state, projectId, index)
  },
  insertColumnAtIndex (state, [projectId, index]) {
    insertColumn(state, projectId, index)
  },
  insertColumnBeforeId (state, [projectId, columnId]) {
    let index = state.projects[projectId].column_order.indexOf(columnId)
    index -= 1
    insertColumn(state, projectId, index)
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
  },
  addInstrument (state, projectId) {
    let id = createId('i')
    let instrument = {
      id,
      name: '',
      key: 'C'
    }
    Vue.set(state.projects[projectId].instruments, id, instrument)
    state.projects[projectId].instrument_order.push(id)
  },
  updateInstrumentProperty (state, [projectId, instrumentId, property, value]) {
    state.projects[projectId].instruments[instrumentId][property] = value
  },
  removeInstrument (state, [projectId, instrumentId]) {
    Vue.delete(state.projects[projectId].instruments, instrumentId)
    var index = state.projects[projectId].instrument_order.indexOf(instrumentId)
    Vue.delete(state.projects[projectId].instrument_order, index)
  }
}
