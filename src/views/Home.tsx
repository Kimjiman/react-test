import { useEffect } from 'react';

const App: React.FC = () => {
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    return (
        <>
            <h1>Home</h1>
        </>
    );
};

export default App;
