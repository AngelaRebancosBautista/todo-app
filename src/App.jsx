import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Stats from "./pages/Stats";

import "./App.css";

const startingTodos = [
  {
    id: 1,
    text: "Learn JSX",
    done: false,
  },
  {
    id: 2,
    text: "Understand props",
    done: false,
  },
  {
    id: 3,
    text: "Build a todo list",
    done: true,
  },
];

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");

    return saved ? JSON.parse(saved) : startingTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  }

  function handleToggle(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <BrowserRouter>
      <div className="app-container">

        <nav className="navbar">
          <div className="logo">
            My Todo App
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/stats">Stats</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>

            <Route
              path="/"
              element={
                <Home
                  todos={todos}
                  onAdd={handleAddTodo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              }
            />

            <Route
              path="/stats"
              element={
                <Stats todos={todos} />
              }
            />

            <Route
              path="/about"
              element={
                <About />
              }
            />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;