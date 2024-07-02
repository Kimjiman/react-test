import { lazy } from 'react';

const components = [{ path: '*', component: lazy(() => import('@/views/error/NotFound')) }];

const routes = components.map(it => ({
    path: it.path,
    element: <it.component />,
}));

export default routes;
