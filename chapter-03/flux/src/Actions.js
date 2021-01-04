import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

// 定义Action的构造函数
// 必有一个type字段，类型是字符串，用来表示action对象的类型
export const increment = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT, // 记录action的类型
    counterCaption: counterCaption
  }); 
};

export const decrement = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  });
};
