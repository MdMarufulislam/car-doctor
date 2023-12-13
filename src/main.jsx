import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './Provider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-6xl mx-auto'>
   <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>
 </div>
)
