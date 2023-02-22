import styles from '../styles/TodoItem.module.scss';
import { useState } from 'react';
const TodoItem = ({ itemProp, setTodos, delTodo }) => {
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const handleEditing = () => {
    setEditing(true);
  };
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      />
    </li>
  );
};
export default TodoItem;