import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import App from './App.jsx'
import ErrorPage from './pages/error-page.jsx'
import { ContactUs } from './components/Form.jsx'
import './index.css'

const router = createBrowserRouter([
  { basename: "/ask-stoic-virtues" },
  {
    path: "/ask-stoic-virtues",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "contacts/:contactId",
        // element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)