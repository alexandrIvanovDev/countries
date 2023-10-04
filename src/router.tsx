import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import { MainPage } from './pages/MainPage.tsx';
import { CountryPage } from './pages/CountryPage.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:id',
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
