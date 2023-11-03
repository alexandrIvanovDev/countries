import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CountryPage } from '@/pages/countryPage';
import { MainPage } from '@/pages/mainPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { Layout } from '@/widgets/layout';

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

const index = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
    errorElement: <div>Error Boundary</div>,
  },
]);

export const Router = () => {
  return <RouterProvider router={index} />;
};
