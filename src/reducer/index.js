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
  }
};
