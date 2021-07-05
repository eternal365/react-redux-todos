import { Filter, TodoCounter, TodoForm, TodoList } from 'components';

const App = () => (
    <div className="app">
        <Filter />
        <TodoCounter />
        <TodoList />
        <TodoForm />
    </div>
);

export default App;
