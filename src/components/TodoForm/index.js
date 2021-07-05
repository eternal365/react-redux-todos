import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from 'features/todos';

import styles from './styles.module.css';

const TodoForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const preparedTitle = title.trim();

        if (preparedTitle.length) {
            dispatch(addTodo(preparedTitle));
            setTitle('');
        }
    };

    return (
        <form className={styles.root} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                value={title}
                placeholder="Enter title and hit ↵ Enter"
                onChange={handleChange}
            />
        </form>
    );
};

export default TodoForm;
