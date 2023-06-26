import { Router as router } from 'express';

// Routes
import AuthRoutes from './AuthRoutes.js';
import TicketsRoutes from './TicketsRoutes.js';
import AdminRoutes from './AdminRoutes.js';
import auth from '../middlewares/Auth.js';
import admin from '../middlewares/Admin.js';


export default router()
    .get('/', (req, res) => {
        res.json({
            message: 'Welcome to the API'
        });
    })
    .use('/auth', AuthRoutes)
    .use('/tickets',auth, TicketsRoutes)
    .use('/admin/tickets',admin, AdminRoutes);
    
