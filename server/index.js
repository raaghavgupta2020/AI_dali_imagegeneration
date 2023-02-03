import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js'; //we have to basically write completely "connect.js" , then only it works in node.js

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send("Hello from DALL-E")
})
  
const startServer = async () => {
    //we need to connect to mongoDB ,  this thing can fail , hence we have touse a try and catch block
    try {
        connectDB(process.env.MONGODB_URL); //here we have to put our mongoDB atlas url 
        app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
        console.log(error)
    }
    
}
  
startServer();