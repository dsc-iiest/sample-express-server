import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from DSC-IIEST',
    });
});

app.use(express.json());

const todos = [];

// Todo Object Structure
// {
//   id: string,
//   task: string
// }

// GET: Receive all the todos
app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

// POST: Create a todo
app.post('/todo/new', (req, res) => {
    const { body } = req;
    todos.push(body);
    res.status(201).json(body);
});

// GET id: Receive the specific todo
app.get('/todo/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find((val) => val.id === id);
    res.status(200).json(todo);
});

// PUT: to update a specific todo
app.put('/todo/update', (req, res) => {
    // Write the code to update the todo whose id is present in teh body
});

// DELETE: to delete a specific todo
app.delete('/todo/:id', (req, res) => {
    // Write the code to delete the specific todo
});

const callback = () => {
    console.log(`Server started on http://localhost:${PORT}`);
};

app.listen(PORT, callback);
