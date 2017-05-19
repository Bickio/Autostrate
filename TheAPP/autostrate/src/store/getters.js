export const currentProjectID = state => state.currentProjectID
export const columns = state => state.projects[state.currentProjectID].columns
export const name = state => state.projects[state.currentProjectID].name
export const rules = state => state.rules
