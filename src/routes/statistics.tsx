import { lazy } from 'react';
import { RouteComponent } from '@/types/module';

const baseDir = '/statistics';
const components = [{ path: 'chart', name: 'Chart', component: lazy(() => import('@/views/statistics/Chart')) }];

const routes: RouteComponent[] = components.map((it) => ({
    path: `${baseDir}/${it.path}`,
    element: <it.component />,
    name: it.name,
}));

export default routes;
