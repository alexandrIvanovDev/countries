import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Layout } from 'components/layout';
import { CountryPage } from 'pages/countryPage';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage/NotFoundPage.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/country/:name',
    element: <CountryPage />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
    errorElement: <div>Error Boundary</div>,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
