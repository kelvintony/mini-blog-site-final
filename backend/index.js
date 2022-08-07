import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import dotenv from 'dotenv';

//importing routers
import postRoute from './routes/postRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoute);
app.use('/user', userRoute);

//this displays when ever we open our server in the backend
app.get('/', (req, res) => {
	res.send('Welcome to netrone blog');
});

const MONGOBD_URL = process.env.MONGOBD_URL;
const PORT = process.env.PORT || 5000;

mongoose
	.connect(MONGOBD_URL)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server is lstening on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(`${error} did not connect`);
	});

// app.get('/', (req, res) => {
// 	res.send('Server is now live!!!');
// });
// mongodb://localhost:27017
