export const changeName = (state, [id, name]) => {
  state.projects[id].name = name
}
