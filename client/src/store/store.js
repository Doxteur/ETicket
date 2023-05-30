import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './Auth/authSlice'
import { ticketsSlice } from './Tickets/ticketSlice'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    tickets: ticketsSlice.reducer,
  },
    
})