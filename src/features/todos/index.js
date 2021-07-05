import { v4 as uuid } from 'uuid';

import { selectFilter } from 'features/filter';

const ADD_TODO = 'todos/addTodo';
const REMOVE_TODO = 'todos/removeTodo';
const TOGGLE_TODO = 'todos/toggleTodo';

export const addTodo = (title) => ({
    type: ADD_TODO,
    payload: title,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
});

const initialState = [];

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO: {
            return [...state, {
                id: uuid(),
                title: action.payload,
                completed: false,
            }];
        }

        case REMOVE_TODO: {
            return state.filter(todo => todo.id !== action.payload);
        }

        case TOGGLE_TODO: {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }

                return todo;
            });
        }

        default: {
            return state;
        }

    }
};

export const selectTodos = (state) => {
    return state.todos;
};

export const selectCompletedTodos = (state) => {
    const todos = selectTodos(state);

    return todos.filter(todo => todo.completed);
};

export const selectVisibleTodos = (state) => {
    const filter = selectFilter(state);

    if (filter === 'completed') {
        return selectCompletedTodos(state);
    }

    return selectTodos(state);
};
