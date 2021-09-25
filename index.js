import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from DSC-IIEST',
    });
});

const callback = () => {
    console.log(`Server started on http://localhost:${PORT}`);
};

app.listen(PORT, callback);
