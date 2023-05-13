import { Router as router } from 'express';

// Routes
import AuthRoutes from './AuthRoutes.js';
import TicketsRoutes from './TicketsRoutes.js';
import auth from '../middlewares/Auth.js';

export default router()
    .get('/', (req, res) => {
        res.json({
            message: 'Welcome to the API'
        });
    })
    .use('/auth', AuthRoutes)
    .use('/tickets',auth, TicketsRoutes);
    
