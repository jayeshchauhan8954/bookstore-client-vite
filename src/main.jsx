// import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthPro from './context/AuthPro.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   // <StrictMode>
   <BrowserRouter>
      <AuthPro>
         <div className='dark:bg-slate-900 dark:text-white'>
            <App />
         </div>
      </AuthPro>
   </BrowserRouter>
   // </StrictMode>

)
