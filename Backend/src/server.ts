import express from 'express';
import authRoutes from './routes/auth';
import { Request,Response } from 'express';


const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/',(req:Request,res:Response)=>{
    res.send("Welcome to Emotorad Dashboard!");
})

app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})