import express from 'express';
import complaintRoutes from './routes/complaint.routes.js'; 
import logger from './middleware/logger.middleware.js';
import auth from './middleware/auth.middleware.js'; 

const app = express();

app.use(express.json());
app.use('/complaints', complaintRoutes);
app.use(logger);
app.use(auth);

export default app;