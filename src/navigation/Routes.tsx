import { createStackNavigator } from '@react-navigation/stack';
import React, { FC, JSX } from 'react';
import { enableScreens } from 'react-native-screens';
import { withUser } from '../contexts/user_context';
import { UserStateProps } from '../contexts/user_context/actionTypes';
import HomeScreen from '../scenes/home';
import Login from '../scenes/login';
import { APP_ROUTES } from '../utils/constants';

const {
    HOME_SCREEN,
    LOGIN_SCREEN,
    AUTH_STACK,
    MAIN_STACK
} = APP_ROUTES;
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

// Optimize memory
enableScreens();

interface RoutesProps {
    userState: UserStateProps;
}

// public stack for authentication.
{/* remove home screen from here when auth implemented and move to private stack below */}
const AuthStackScreen = (): JSX.Element => (
    <AuthStack.Navigator screenOptions={{ headerMode:false }} >
        <AuthStack.Screen name={LOGIN_SCREEN} component={Login} />
        <AuthStack.Screen name={HOME_SCREEN} component={HomeScreen} /> 
    </AuthStack.Navigator>
);

// private stack for main app navigation after auth.
const MainStackScreen = (): JSX.Element => (
    <MainStack.Navigator screenOptions={{ headerMode:false }} >
        <MainStack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </MainStack.Navigator>
);

const Routes: FC<RoutesProps> = ({ userState }: RoutesProps): JSX.Element => {
    const { user } = userState;

    return (
        <Stack.Navigator screenOptions={{ headerMode:false }}>
            {/* {!user?.isLoggedIn ? (
                <Stack.Screen name={AUTH_STACK} component={AuthStackScreen} />
            ) : (
                <Stack.Screen name={MAIN_STACK} component={MainStackScreen} />
            )} */}                
            <Stack.Screen name={AUTH_STACK} component={AuthStackScreen} />
        </Stack.Navigator>
    );
};

export default withUser(Routes);
