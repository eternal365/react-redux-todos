import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { removeTodo, toggleTodo } from 'features/todos';

import styles from './styles.module.css';

const Item = ({id, title, completed}) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(id));
    };

    return (
        <div className={cx(
            styles.item,
            completed && styles.item_completed
        )}>
            <div className={styles.item__icon}>{completed ? '✔️' : '⭐'}</div>
            <div className={styles.item__title}>{title}</div>
            <div className={styles.item__actions}>
                <button className={styles.item__action} title="Toggle" onClick={handleToggle}>{completed ? '❌' : '✔️'}</button>
                <button className={styles.item__action} title="Remove" onClick={handleRemove}>🗑️</button>
            </div>
        </div>
    );
};

export default Item;
