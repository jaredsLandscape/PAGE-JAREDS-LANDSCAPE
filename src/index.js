import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Terms from './Terms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/terms",
    element: <Terms/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

