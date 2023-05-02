import  express, { Router, json } from "express";
import mongoose from "mongoose";

import router from "./router.js";

const PORT = 5000

const DB_URL = "mongodb+srv://user:user@cluster0.k5omo2x.mongodb.net/?retryWrites=true&w=majority"

const app = express()
app.use(express.json())
app.use('/api',router)



app.post('/', async (req,res)=>{
    try{
        const { author,title,content,picture} = req.body
        const post = await Post.create({author,title,content,picture})
         res.json(post)

    }catch(e){
   res.status(500).json(e)
    }
  
})

async function startApp (){
     try{
         await mongoose.connect(DB_URL,{useUnifiedTopology: true,useNewUrlParser:true})
        app.listen(PORT, ()=> console.log("Server start on port" + PORT))

     }catch (e){
     console.log(e)
     }
}
startApp()


