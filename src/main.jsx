import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Home from './pages/Home/Home.jsx';
import MarketPlace from './pages/MarketPlace/MarketPlace.jsx';
import Create from './pages/Create/Create.jsx';
import Inventory from './pages/Inventory/Inventory.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="marketplace" element={<MarketPlace />} />
      <Route path="create" element={<Create />} />
      <Route path="inventory" element={<Inventory />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);