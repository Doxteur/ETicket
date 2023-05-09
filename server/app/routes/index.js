import { Router as router } from 'express';

// Routes
import AuthRoutes from './AuthRoutes.js';


export default router()
    .get('/', (req, res) => {
        res.json({
            message: 'Welcome to the API'
        });
    })
    .use('/auth', AuthRoutes);
