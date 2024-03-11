import mongoose from "mongoose"

// require('dotenv').config({ path: '../.env' });


const connectToMongoDb = async() =>{
    // console.log(process.env.MONGO_DB_URI);
    
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('Connected to MongoDb');
        
    }catch(error){
        console.log('Error Connecting to MongoDB',error.message);
        
    }
}

export default connectToMongoDb

// "mongodb+srv://mayurdadas16360:6kFWKnJCsIkZrPtw@cluster0.oysasfj.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0"