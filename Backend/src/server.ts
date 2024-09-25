import express from 'express';
import 'dotenv/config'
import authRoutes from './routes/auth';
import { Request,Response } from 'express';
import { connectToDB } from './lib/dbConnection';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    origin:"https://66f42e795f1b8808648a4dbd--thriving-donut-b7dc4f.netlify.app"
}));

app.use('/api/auth', authRoutes);

app.get('/',(req:Request,res:Response)=>{
    res.send("Welcome to Emotorad Dashboard!");
})

app.listen(8000,()=>{
    connectToDB();
    console.log('Server is running on port 8000')
})
