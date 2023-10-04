import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <div>Main page</div>,
  },
  {
    path: '/:id',
    element: <div>Country page</div>,
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
