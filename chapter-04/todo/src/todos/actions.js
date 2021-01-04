import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

let nextTodoId = 0;

// 简写，省略掉了return
export const addTodo = (text) => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId ++, // 保证id唯一且递增
  text: text
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});

