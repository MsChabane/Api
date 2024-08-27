import express from "express";
import router from './routes/route.js'
import path from 'path'
import { fileURLToPath } from "url";
const port =process.env.Port || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app =express()
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs')
app.use('/api', router );

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});