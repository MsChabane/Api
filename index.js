import express from "express";
import router from './routes/route.js'
const port =process.env.Port || 5000
const app =express()

app.use('/api', router );

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});