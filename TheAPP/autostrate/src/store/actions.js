export const changeName = ({ commit }, [id, name]) => {
  commit('changeName', [id, name])
}
