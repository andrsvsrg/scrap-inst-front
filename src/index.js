import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Account from './pages/Account'
import Home from './pages/Home'
import Post from './pages/Post'
import { Provider } from 'react-redux'
import { store } from './redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/account/:profileName",
    element: <Account/>
  },
  {
    path: "/account",
    element: <Account/>
  },
  {
    path: "/post/:shortcode",
    element: <Post/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>

);

