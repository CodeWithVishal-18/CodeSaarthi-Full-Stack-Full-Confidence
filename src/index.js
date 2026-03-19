import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Home';
import SQL from './category/SQL.jsx';
import SQLCheatsheat from './category/SQLCheatsheat.jsx';
import ThemeProvider from './hooks/ThemeContext.js';

let routes=createBrowserRouter([
  {
    path:"/",
    element: <App/>, children :[
      {index:true,element:<Home/>},
      {path:"sql",element:<SQL/>},
      {path:"sqlcheatsheet",element:<SQLCheatsheat/>},
      {path:"*",element:<Navigate to="/" replace/>}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ThemeProvider><RouterProvider router={routes}/></ThemeProvider>);