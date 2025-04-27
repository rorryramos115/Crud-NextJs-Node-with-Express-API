import express from 'express';
import { PORT } from './config/env.js';

import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';


import userRouter from './routes/user.routes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/api/v1/users', userRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the Crud API');
});

app.listen(PORT, async () => {
    console.log(`Crud API is running on http://localhost:${PORT}`);

    await connectToDatabase();
});

export default app;