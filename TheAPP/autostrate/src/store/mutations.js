export default {
  addColumn (state, projectId) {
    let timestamp = Date.now()
    let id = 'c_' + timestamp
    state.projects[projectId].columns[id] = {
      id,
      chord: 'test_chord',
      melody: '',
      rule: ''
    }
  }
}
