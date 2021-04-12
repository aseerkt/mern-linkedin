import 'colors';
import 'dotenv/config';
import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import { PORT, __prod__ } from './constants';

// Importing routes
import userRoutes from './routes/userRoutes';
import { connectDB } from './connectDB';

connectDB();

const app = express();

app.use(cors());

app.use(logger(__prod__ ? 'common' : 'dev'));
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello Welcome to Linkedin Clone');
});

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () =>
  console.log(`App is listening on http://localhost:${PORT}`.blue.bold)
);
