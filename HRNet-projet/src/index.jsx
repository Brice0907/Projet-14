import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/index.css';
import Root from './root/root.jsx';
import Create from './pages/create/create.jsx';
import List from './pages/list/list.jsx';
import Error from './pages/error/error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '',
        element: <Create />,
      },
      {
        path: '/list',
        element: <List />,
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);