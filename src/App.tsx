import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import routes from '@/routes/index';
import errorRoutes from '@/routes/error';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import useGlobalStore from '@/store/index';

const RouteGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const { setInitState } = useGlobalStore();

    useEffect(() => {
        console.log('Navigated to:', location.pathname);
    }, [location, setInitState]);

    return <>{children}</>;
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <main className="contents">
                <Suspense fallback={<div>Loading...</div>}>
                    <RouteGuard>
                        <Routes>
                            {routes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element} />
                            ))}
                            {errorRoutes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element} />
                            ))}
                        </Routes>
                    </RouteGuard>
                </Suspense>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRouter;
