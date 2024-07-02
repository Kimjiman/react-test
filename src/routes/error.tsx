import { lazy } from 'react';
import { RouteComponent } from '@/types/module';

const components = [{ path: '*', name: 'notFound', component: lazy(() => import('@/views/error/NotFound')) }];

const routes: RouteComponent[] = components.map(it => ({
    path: it.path,
    element: <it.component />,
    name: it.name,
}));

export default routes;
