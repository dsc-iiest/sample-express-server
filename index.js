import express from 'express';

const app = express();
const PORT = 5000;

const callback = () => {
    console.log(`Server started on http://localhost:${PORT}`);
};

app.listen(PORT, callback);
