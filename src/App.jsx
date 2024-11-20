import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

// import { NavItem } from 'react-bootstrap'
import NavItems from './components/header/NavItems'
import Footer from './components/footer/Footer'

// Importing components
import Home from './components/home/Home.jsx';
import Blog from './components/blog/Blog.jsx';
import Shop from './components/shop/Shop.jsx';
import SingleProduct from './components/shop/SingleProduct.jsx'
import CartPage from './components/shop/CartPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'shop', element: <Shop /> },
      { path: '/shop/:id', element: <SingleProduct/> },
      { path: 'cart-page', element: <CartPage/>},
    ],
  },
]);


function App() {
  return (
   
    <>
    <RouterProvider router={router} />
      <NavItems/>
      <div className='min-vh-100'>
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default App





