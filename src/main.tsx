import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AppProvider } from './context/AppContext.tsx'
import "leaflet/dist/leaflet.css";
import { SocketProvider } from './context/SocketContext.tsx'

export const authService = "https://auth-tomato.onrender.com";
export const restaurantService = "https://restaurant-fxzb.onrender.com";
export const utilsService = "https://utils-ze2x.onrender.com";
export const realtimeService = "https://realtime-7xhd.onrender.com";
export const riderService = "https://rider-vgll.onrender.com";
export const adminService = "https://admin-unrs.onrender.com";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='280652337463-q0vp360tme55evv1bjl9d2qcfnn9tvsh.apps.googleusercontent.com'>
      <AppProvider>
        <SocketProvider>
    <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
