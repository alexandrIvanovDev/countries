import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import { MainPage } from './pages/main-page/MainPage.tsx';
import { CountryPage } from './pages/country-page/CountryPage.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:name',
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
