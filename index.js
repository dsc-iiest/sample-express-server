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
app.post('/todos/new', (req, res) => {
    const { body } = req;
    todos.push(body);
    res.status(201).json(body);
});

const callback = () => {
    console.log(`Server started on http://localhost:${PORT}`);
};

app.listen(PORT, callback);
