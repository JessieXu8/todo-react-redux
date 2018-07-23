import * as types from '../constants/ActionType';

export const addItem = todos => ({ type: types.ADDITEM, todo: todos });
export const checkItem = todos => ({ type: types.CHECKITEM, todo: todos });
export const editItem = todos => ({ type: types.EDITITEM, todos });
export const changeStatus = (todos, status) => ({
  type: types.CHANGESTATUS,
  todos,
  status: status
});
