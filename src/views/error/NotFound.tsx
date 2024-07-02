import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    let [count, setCount] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);

        if (count === 0) {
            navigate('/', { replace: true });
        }

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>count : {count}</p>
        </div>
    );
};

export default NotFound;
