// export出了很多构造函数，采用命名式导入更方便
import * as actions from './actions.js';
import reducer from './reducer.js';
import view from './views/todos.js';

export {actions, reducer, view};
