import { useState } from 'react';
import styles from '../styles/TodoItem.module.scss';
import { useAuthContext } from '../context/AuthContext';

const TodoItem = ({
  itemProp, setTodos, delTodo, setUpdate,
}) => {
  const { user } = useAuthContext();
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = { display: 'none' };
  if (editing) {
    viewMode.display = 'none';
    editMode.display = 'block';
  } else {
    editMode.display = 'none';
    viewMode.display = 'flex';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {user && (
          <button onClick={handleEditing}>
            Edit
          </button>
        )}
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
