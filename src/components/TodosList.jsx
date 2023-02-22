import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, setTodos, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        setTodos={setTodos}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object,
    PropTypes.bool, PropTypes.func]).isRequired,
  setTodos: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object,
    PropTypes.bool, PropTypes.func]).isRequired,
  delTodo: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object,
    PropTypes.bool, PropTypes.func]).isRequired,
  setUpdate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object,
    PropTypes.bool, PropTypes.func]).isRequired,
};
export default TodosList;
