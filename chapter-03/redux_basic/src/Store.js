import {createStore} from 'redux';
import reducer from './Reducer.js';

// 输出全局唯一的store

const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
};

const store = createStore(reducer, initValues);

export default store;
