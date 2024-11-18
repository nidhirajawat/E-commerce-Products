import React from 'react';
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Blog from './components/blog/Blog.jsx';
import Shop from './components/shop/Shop.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/",
        element: <Home/>},
        {
          path: "/blog",
          element: <Blog/>,
        }
        {
          path: "/shop",
          element: <Shop/>
        }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
