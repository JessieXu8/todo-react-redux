import * as types from '../constants/ActionType';
import Todo from '../model/Todo';

export default (
  state = {
    todos: [],
    status: Todo.ALL
  },
  action
) => {
  switch (action.type) {
    case types.ADDITEM: {
      console.log(action.todo);
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case types.CHECKITEM: {
      console.log(action.todo);
      return {
        ...state,
        todos: state.todos.map(
          todo => (todo.viewId === action.todo.viewId ? action.todo : todo)
        )
      };
    }
    case types.EDITITEM: {
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.viewId === action.todo.viewId
              ? { ...todo, content: action.todo.content }
              : todo
        )
      };
    }
    case types.CHANGESTATUS: {
      return {
        todos: [...action.todos],
        status: action.status
      };
    }
    default:
      return state;
  }
};
