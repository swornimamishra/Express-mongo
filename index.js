import express from 'express';
import AppRouter from './src/routes/index.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT ;
const app = express()

app.use(express.json())
app.use(AppRouter)

app.listen(PORT, () => console.log('App is listening on Port ' + PORT));

