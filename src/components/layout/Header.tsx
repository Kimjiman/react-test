import routes from '@/routes/index';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <ul>
                    {routes.map((route, index) => (
                        <li key={index}>
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
