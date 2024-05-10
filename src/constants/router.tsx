import { Outlet, createBrowserRouter } from 'react-router-dom';
import Urls from './urls';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Outlet />
      </>
    ),

    children: [
      {
        path: Urls.main,
        element: <h1>Main page</h1>,
      },
      {
        path: Urls.login,
        element: <h1>Login page</h1>,
      },
      {
        path: Urls.registration,
        element: <h1>Registration page</h1>,
      },
      {
        path: '*',
        element: <h1>404: Not found</h1>,
      },
    ],
  },
]);
