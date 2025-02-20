import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.js';
import authorsRouter from './routes/authors.js';
import loansRouter from './routes/loans.js';

const app = express();
const PORT = process.env.BACKEND_PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

app.use('/api/books', booksRouter);
app.use('/api/authors', authorsRouter);
app.use('/api/loans', loansRouter);

app.get('/', (req, res) => {
    console.log("Linea debugging");
    res.send('Funca :)');
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
