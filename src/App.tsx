import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { UserContextProvider } from './contexts/user_context';
import Routes from './navigation/Routes';

const App = () => (
    <NavigationContainer>
        <UserContextProvider>
                <Routes />
        </UserContextProvider>
    </NavigationContainer>
);

export default App;
