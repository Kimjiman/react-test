import { Spinner } from '@chakra-ui/react';
import useGlobalStore from '@/store/index';

const App = () => {
    const { getSpin } = useGlobalStore();
    return getSpin() && <Template />;
};

const Template = () => {
    return (
        <div id='load-div'>
            <div id='load-spinner'>
                <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
            </div>
        </div>
    );
};

export default App;
