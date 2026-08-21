function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">

      <span
        className={todo.done ? "todo-text completed" : "todo-text"}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>

      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>

    </li>
  );
}

export default TodoItem;