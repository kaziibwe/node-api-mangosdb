
import express from 'express';
const app =express();


app.use(express.json());

app.listen(5000,()=>{
console.log("Server listening in http://localhost:5000")
})
