import Immutable from 'immutable'

export default (state = Immutable.List(), action){
  switch(action.type) {
    case: 'addTodo'
      return state.push(action.todo)
  }
}
