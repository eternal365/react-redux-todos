import { combineReducers, createStore } from 'redux';

import { filterReducer } from 'features/filter';
import { todosReducer } from 'features/todos';

const store = createStore(combineReducers({
    filter: filterReducer,
    todos: todosReducer,
}));

export default store;
