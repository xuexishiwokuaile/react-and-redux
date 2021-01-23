import * as ActionTypes from './ActionTypes.js';

// 构造函数会返回action对象，这样做没有副作用，把相关工作交给调用者
// 与flux不同，flux是立刻dispatch出去
export const increment = (counterCaption) => {
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
};

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
};
