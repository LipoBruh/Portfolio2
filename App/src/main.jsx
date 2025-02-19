import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {  createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import "./styles/index.css";
import { BODY } from "./assets/assets";
import Page from "./pages/Page";
import { Navigate } from "react-router-dom";


const routes = Object.values(BODY.routes).map((route,index) => ({element:<Page route={route} />, path:route.path, index:route.index, name:route.name}));
const homepage = {element: <Navigate to="/3DModeling" replace />, path:BODY.homepage.path, index:BODY.homepage.index, name:BODY.homepage.name}
const all = [...routes,homepage]


const router = createBrowserRouter([{
  path:'/',
  element : <App routes = {routes} />,
  children : all,
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
