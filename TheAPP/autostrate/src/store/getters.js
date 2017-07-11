export const rules = state => state.rules

export const currentProjectId = state => state.current_project_id

export const projectDefaultRule = (state, getters) =>
  state.projects[getters.currentProjectId].default_rule

export const projectName = (state, getters) =>
  state.projects[getters.currentProjectId].name
export const projectNameById = (state, getters) => (id) => {
  state.projects[id].name
}

export const projectKey = (state, getters) =>
  state.projects[getters.currentProjectId].key
export const projectKeyById = (state, getters) => (id) => {
  state.projects[id].key
}

export const columns = (state, getters) =>
  state.projects[getters.currentProjectId].columns
export const columnOrder = (state, getters) =>
  state.projects[getters.currentProjectId].column_order
export const columnOrderById = (state, getters) => (id) => {
  state.projects[id].column_order
}

export const instruments = (state, getters) =>
  state.projects[getters.currentProjectId].instruments
export const instrumentsById = (state, getters) => (id) => {
  state.projects[id].instruments
}

export const instrumentOrder = (state, getters) =>
  state.projects[getters.currentProjectId].instrument_order
export const instrumentOrderById = (state, getters) => (id) => {
  state.projects[id].instrument_order
}
