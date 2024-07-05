import routes from '@/routes/index';
import { Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [selectedPath, setSelectedPath] = useState('/'); // 선택된 경로를 상태로 관리

    const selectRoute = (event: any) => {
        const selectedValue = event.target.value;
        setSelectedPath(selectedValue); // 선택된 값을 상태에 업데이트
        navigate(selectedValue);
    };

    return (
        <header>
            <h1>Header</h1>
            <nav>
                <Select placeholder='선택' onChange={selectRoute} value={selectedPath}>
                    {routes.map((route, index) => (
                        <option value={route.path} key={index}>
                            {route.name}
                        </option>
                    ))}
                </Select>
            </nav>
        </header>
    );
};

export default Header;
