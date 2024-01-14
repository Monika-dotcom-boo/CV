import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/index.jsx';
import { Flowbite } from 'flowbite-react';
import customTheme from '../flowbite-theme.js';
import "./index.css"
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Flowbite theme={{ theme: customTheme }}>
      <RouterProvider router={router} />
    </Flowbite>
  </React.StrictMode>,
)
