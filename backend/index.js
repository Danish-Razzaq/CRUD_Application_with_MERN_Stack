import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

const username = process.env.DB_USERNAME;
const userPassword = process.env.DB_PASSWORD;

const PORT = 4000;

// Apply CORS middleware before defining routes
app.use(cors());

// Use body-parser to get body 
app.use(bodyParser.json({extended:true}));

//use body-parser to decode the url when url in-code
app.use(bodyParser.urlencoded({extended:true}))

// Use the Routes middleware
app.use('/', Routes);

//username, && userPassword come from you Env file plz define you mongo atlas username, & userPassword if you use mongo atlas otherwise remover username, userPassword and directly pass local path of mongo-db in db.js file 
connectToDatabase(username, userPassword, PORT);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});


