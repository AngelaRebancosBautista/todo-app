import { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

function Home({ todos, onAdd, onToggle, onDelete }) {
  const [filter, setFilter] = useState("all");

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.done;
    }

    if (filter === "completed") {
      return todo.done;
    }

    return true;
  });

  return (
    <div className="home-page">

      <div className="page-header">
        <h1>My Todo App</h1>

        <p>
          Manage your tasks easily.
        </p>
      </div>

      <AddTodoForm onAdd={onAdd} />

      <div className="filters">

        <button
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "active-filter" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={filter === "completed" ? "active-filter" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>

      </div>

      <TodoList
        todos={visibleTodos}
        onToggle={onToggle}
        onDelete={onDelete}
      />

    </div>
  );
}

export default Home;