import Immutable from 'immutable'

export default (state = Immutable.List(['Code More!']), action) => {
  switch(action.type) {
    case 'addTodo':
      return state.unshift(action.todo)
    default:
      return state
  }
}
