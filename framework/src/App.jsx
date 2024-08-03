// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';  
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';
import './index.css';  
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';


const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> }

    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
 