import { lazy } from 'react';

const baseDir = '/statistics';
const components = [{ path: 'chart', name: 'Chart', component: lazy(() => import('@/views/statistics/Chart')) }];

const routes = components.map(it => ({
    path: `${baseDir}/${it.path}`,
    element: <it.component />,
    name: it.name,
}));

export default routes;
