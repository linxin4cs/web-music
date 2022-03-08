import { useRoutes } from 'react-router-dom';

import Discover from '@/pages/discover';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Discover />
    },
  ]);

  return routes;
}


export default Routes;