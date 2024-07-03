import main from '@/routes/main';
import statistics from '@/routes/statistics';
import user from '@/routes/user';

const routes = [...main, ...statistics, ...user];

export default routes;
