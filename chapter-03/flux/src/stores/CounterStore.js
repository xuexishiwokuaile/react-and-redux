import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 30
};

// 观察者模式
const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function() {
    return counterValues;
  },

  // 广播
  emitChange: function() {
    this.emit(CHANGE_EVENT); // 广播特定事件
  },

  // 添加监听函数
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback); // 监听到指定事件时，触发回调函数
  },

  // 删除监听函数
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

// Store需要注册到Dispatcher实例上才能发挥作用
// 最核心的部分：所有派发给Dispatcher的action对象，都会传递到这里的回调函数
CounterStore.dispatchToken = AppDispatcher.register((action) => {
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption] ++;
    CounterStore.emitChange(); // 引发监听函数的执行
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption] --;
    CounterStore.emitChange();
  }
});

export default CounterStore;
