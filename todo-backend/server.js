const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory todo data
let todos = [
    {
        id: 1,
        text: "Learn Express",
        completed: false
    },
    {
        id: 2,
        text: "Build a REST API",
        completed: false
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("Todo Backend API is running!");
});

// GET all todos
app.get("/api/todos", (req, res) => {
    res.json(todos);
});

// POST a new todo
app.post("/api/todos", (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };

    todos.push(newTodo);

    res.json(newTodo);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});