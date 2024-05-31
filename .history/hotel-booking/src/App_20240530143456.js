import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import RoomDetail from './pages/RoomDetails';


//react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: Home,
    },
    {
      path: '/room/:id',
      element: RoomDetail,
    }
  ]
);

const App = () => {

  return <div>CHooo Consssa</div>;
};

export default App;
