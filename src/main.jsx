import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import ErrorPage from './pages/error-page.jsx'
import KOR from './pages/KOR'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
import './index.css'

const router = createBrowserRouter([
  { basename: "/ask-stoic-virtues" },
  {
    path: "/ask-stoic-virtues",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "",
        // element: <KOR />,
      },
    ],
  },
  { path: "/ask-stoic-virtues/KOR",  element: <KOR /> },
  { path: "/ask-stoic-virtues/login",  element: <Login /> },
  { path: "/ask-stoic-virtues/register",  element: <Register /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
