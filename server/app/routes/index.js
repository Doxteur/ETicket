import { Router as router } from 'express';

// Routes
import NoteRoutes from './NoteRoutes.js';
import AuthRoutes from './AuthRoutes.js';

// Middleware
import auth from '../middlewares/auth.js';

export default router()
    .get('/', (req, res) => {
        res.json({
            message: 'Welcome to the API'
        });
    })
    .use('/auth', AuthRoutes);
