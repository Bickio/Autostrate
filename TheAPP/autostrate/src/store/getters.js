import api from '../api/index'

export const rules = state => state.rules

export const currentProjectId = state => state.current_project_id

export const projectDefaultRule = (state, getters) =>
                                  state.projects[getters.currentProjectId].default_rule
export const projectName = (state, getters) =>
                           state.projects[getters.currentProjectId].name
export const projectKey = (state, getters) =>
                          state.projects[getters.currentProjectId].key

export const columns = (state, getters) =>
                       state.projects[getters.currentProjectId].columns
export const columnOrder = (state, getters) =>
                           state.projects[getters.currentProjectId].column_order
export const instrumentOutputs = function (state, getters) {
  let out = {}
  for (let c in getters.columns) {
    let column = getters.columns[c]
    let notes = api.voicing(column.chord, column.melody, column.rule)
    let instruments = {}
    for (let i in getters.instruments) {
      // will call to API here
      instruments[getters.instruments[i].id] = notes.pop()
    }
    out[getters.columns[c].id] = instruments
  }
  return out
}

export const instruments = (state, getters) =>
                           state.projects[getters.currentProjectId].instruments
export const instrumentOrder = (state, getters) =>
                               state.projects[getters.currentProjectId].instrument_order
