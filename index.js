import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from DSC-IIEST',
    });
});

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

const callback = () => {
    console.log(`Server started on http://localhost:${PORT}`);
};

app.listen(PORT, callback);
