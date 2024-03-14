import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produto from './routes/Produto.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

{/* Criando a função createbrowserouter */}
const router = createBrowserRouter([
  {
    /* Chamando o elemento pai */
    path:'/', element: <App/>,
    errorElement:<Error/>,

    children:[
      {path:'/home',element:<Home/>},
      {path:'/produto',element:<Produto/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Chamando a função que será renderizada */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
