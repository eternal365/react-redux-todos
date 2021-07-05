import { useDispatch, useSelector } from 'react-redux';

import { selectFilter, toggleVisibility } from 'features/filter';

import styles from './styles.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChange = () => {
        dispatch(toggleVisibility());
    };

    return (
        <div className={styles.root}>
            <input
                className={styles.input}
                id="filter"
                type="checkbox"
                checked={filter === 'completed'}
                onChange={handleChange}
            />
            <label className={styles.label} htmlFor="filter">Show only completed</label>
        </div>
    );
};

export default Filter;
