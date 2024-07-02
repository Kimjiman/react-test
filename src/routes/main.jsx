import { lazy } from 'react';

const baseDir = '';
const components = [
    { path: '', name: 'Home', component: lazy(() => import('@/views/Home')) },
    { path: 'about', name: 'About', component: lazy(() => import('@/views/About')) },
];

const routes = components.map(it => ({
    path: `${baseDir}/${it.path}`,
    element: <it.component />,
    name: it.name,
}));

export default routes;
