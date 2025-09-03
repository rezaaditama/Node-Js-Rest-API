import express, { Application } from 'express';
import { corsOptions } from './middleware/cors';
import { routes } from './routes';

const app: Application = express();

// Request Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cors
app.use(corsOptions);

// Router
routes(app);

export default app;
