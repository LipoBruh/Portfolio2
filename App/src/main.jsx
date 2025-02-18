import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {  createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import "./styles/index.css";
import { BODY } from "./assets/assets";
import Page from "./pages/Page";


console.log(Object.entries(BODY))
const routes = Object.values(BODY).map((route,index) => ({element:<Page route={route} />, path:route.path, index:route.index, name:route.name}));

const router = createBrowserRouter([{
  path:'/',
  element : <App routes = {routes} />,
  children : routes,
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
