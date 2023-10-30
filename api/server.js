import express  from "express";
import mongoose from "mongoose";
const app = express()
const port = 3000 
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`servr running on ${port}!`))