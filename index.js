import express from 'express';
import AppRouter from './src/routes/index.js';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(AppRouter);

app.listen(PORT, () => console.log('App is listening on Port ' + PORT));
