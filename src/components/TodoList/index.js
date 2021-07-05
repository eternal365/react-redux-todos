import { useSelector } from 'react-redux';

import { selectVisibleTodos } from 'features/todos';

import Item from './Item';

import styles from './styles.module.css';

const TodoList = () => {
    const todos = useSelector(selectVisibleTodos);

    return (
        <div className={styles.root}>
            {todos.map(todo => <Item key={todo.id} {...todo} />)}
        </div>
    );
};

export default TodoList;
