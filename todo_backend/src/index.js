import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.js';
import authorsRouter from './routes/authors.js';
import loansRouter from './routes/loans.js';

const app = express();
const PORT = process.env.PORT || 3000;

//  CSP
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'none'; img-src 'self';");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

app.use('/api/books', booksRouter);
app.use('/api/authors', authorsRouter);
app.use('/api/loans', loansRouter);

app.get('/', (req, res) => {
    res.send('Funca :)');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
