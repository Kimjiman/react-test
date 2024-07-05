import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import api from '@/axios/index';

const Login = () => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');

    const goLogin = async () => {
        console.log(`Login ID: ${loginId}, Password: ${password}`);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        try {
            const res = await api.auth.login(loginId, password);
            localStorage.setItem('accessToken', res?.accessToken);
            localStorage.setItem('refreshToken', res?.refreshToken);
        } catch (ex) {
            console.error(ex);
        }
    };

    const goTest = async () => {
        try {
            const res = await api.auth.test();
            console.log(res);
        } catch (ex) {
            console.error(ex);
        }
    };

    return (
        <Box maxW='md' m='auto' p='4'>
            <Input placeholder='로그인 아이디' value={loginId} onChange={(e) => setLoginId(e.target.value)} mb='2' />
            <Input
                type='password'
                placeholder='비밀번호'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                mb='2'
            />
            <Button colorScheme='blue' onClick={goLogin}>
                로그인
            </Button>
            <Button colorScheme='blue' onClick={goTest}>
                테스트
            </Button>
        </Box>
    );
};

export default Login;
