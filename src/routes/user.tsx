import { lazy } from 'react';
import { RouteComponent } from '@/types/module';

const baseDir = '/user';
const components = [{ path: 'login', name: 'Login', component: lazy(() => import('@/views/user/Login')) }];

const routes: RouteComponent[] = components.map((it) => ({
    path: `${baseDir}/${it.path}`,
    element: <it.component />,
    name: it.name,
}));

export default routes;
