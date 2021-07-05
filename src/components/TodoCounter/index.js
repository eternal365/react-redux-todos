import { useSelector } from 'react-redux';

import { selectCompletedTodos, selectTodos } from 'features/todos';

import styles from './styles.module.css';

const TodoCounter = () => {
    const allTodos = useSelector(selectTodos);
    const completedTodos = useSelector(selectCompletedTodos);

    return (
        <div className={styles.root}>{allTodos.length - completedTodos.length} left / {allTodos.length} total</div>
    );
};

export default TodoCounter;
