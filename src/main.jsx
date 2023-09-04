import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx';
// import Sobre from './pages/Sobre.jsx'

const router = createBrowserRouter([
  {
    path: "/",  
    element: <Home />
  },
  {
    path: "/sobre",  
    element: <Home />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
