import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import App from './App';

//The basename is added because if it is not there ghpages
//gets a 404
//My idea is that the base url that react router reads stops at
//https://squiddotjpeg.github.io/ but in order to access the right
//ghpages environment it needs to read
//https://squiddotjpeg.github.io/defuse/
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
], { basename: "/defuse/" });

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);