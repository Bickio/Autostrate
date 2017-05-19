export const currentProjectId = state => state.current_project_id
export const columns = (state, getters) => state.projects[getters.currentProjectId].columns
export const name = (state, getters) => state.projects[getters.currentProjectId].name
export const rules = state => state.rules
export const projectDefaultRule = (state, getters) => state.projects[getters.currentProjectId].default_rule
