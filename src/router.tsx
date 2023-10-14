import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from 'src/components/layout';
import { MainPage } from 'src/pages/mainPage';
import { CountryPage } from 'src/pages/countryPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/country/:name',
    element: <CountryPage />,
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
