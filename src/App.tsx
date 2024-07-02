import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import routes from '@/routes/index';
import errorRoutes from '@/routes/error';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import useGlobalStore from '@/store/index';

const AppRouter: React.FC = () => {
    const { setInitState } = useGlobalStore();

    // 애플리케이션 최초 로딩 시 initState를 true로 변경
    useEffect(() => {
        setInitState(true);
    }, []);

    return (
        <Router>
            <Header />
            <main className="contents">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                        {errorRoutes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    );
};

export default AppRouter;
