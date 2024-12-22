import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import routes from './src/routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server runing on port: ${PORT}`);
});
