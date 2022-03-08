import { useRoutes } from 'react-router-dom';

import Discover from '@/pages/discover';
import Mine from '@/pages/mine';
import Friend from '@/pages/friend';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      exact: true,
      element: <Discover />,
    },
    {
      path: '/mine',
      exact: true,
      element: <Mine />,
    },
    {
      path: '/friend',
      exact: true,
      element: <Friend />,
    },
  ]);

  return routes;
}


export default Routes;