import mongoose from "mongoose"
export const connectToDB=async()=>{
   try{
     await mongoose.connect(process.env.DATABASE_URL!);
     console.log("Connected to MongoDB")
 
   }catch(err:any){
    console.error(`Error connecting to MongoDB: ${err.message}`)
    process.exit(1)
   }
}