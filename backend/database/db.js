
import mongoose from 'mongoose';

// Use async/await to connect to the database
async function connectToDatabase(username,userPassword) {
    // Define your MongoDB connection URL
    
  //if you not use mongo-db atlas then remove this link and paste locally path of you  mongo-db
    const MONGODB_URI = `mongodb+srv://${username}:${userPassword}@crud.mbbghyg.mongodb.net/?retryWrites=true&w=majority`;
  try {
      await mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
      useUnifiedTopology: true,
    
    });
    console.log(`Connected to MongoDB `);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}



// Export the connection function
export default  connectToDatabase ;
