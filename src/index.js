import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './home/Home.jsx';
import SQL from './category/sql/SQL.jsx';
import SQLCheatsheat from './category/sql/SQLCheatsheat.jsx';
import ThemeProvider from './hooks/ThemeContext.js';
import HTML from './category/html/HTML.jsx';

let routes=createBrowserRouter([
  {
    path:"/",
    element: <App/>, children :[
      {index:true,element:<Home/>},
      {path:"html",element:<HTML/>},
      {path:"sql",element:<SQL/>},
      {path:"sqlcheatsheet",element:<SQLCheatsheat/>},
      {path:"*",element:<Navigate to="/" replace/>}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ThemeProvider><RouterProvider router={routes}/></ThemeProvider>);