import React from 'react'
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import { store } from './store/store';
import {
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import App from './App'
import './index.scss';
//Pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProductLayout from './components/ProductLayout';
import Product from './pages/Product';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='products' element={<ProductLayout />}>
        <Route index element={<Products />} />
        <Route path=':id' element={<Product />} />
      </Route>
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer limit={1} />
    <Provider store={store}>
    <RouterProvider router={router} />
    <App />
    </Provider>
  </React.StrictMode>,
)
