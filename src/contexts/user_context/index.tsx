import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { initialState, TasksActionKeys, UserStateProps } from './actionTypes';
import { loginUser } from './api';
import TasksReducer from './reducer';

export interface UserDispatchProps {
    loginUser: () => void;
}

export interface UserContextType {
    userState: UserStateProps;
    userActions: UserDispatchProps;
}

const UserContext = createContext<UserContextType>({
    userState: initialState,
    userActions: {
        loginUser: () => {},
    },
});

interface UserContextProviderProps {
    children: ReactNode;
}
export const UserContextProvider = (props: UserContextProviderProps) => {
    const [userState, dispatch] = useReducer(TasksReducer, initialState);
    const { children } = props;

    // authenticate user
    const authenticateUser = (): void => {
        dispatch({ type: TasksActionKeys.setLoading, loading: true });
        loginUser(reqBody)
            .then((data) => {
                dispatch({ type: TasksActionKeys.setUser, user: data, loading: false });
            })
            .catch((error) => {
                dispatch({
                    type: TasksActionKeys.setError,
                    error: JSON.stringify(error?.message),
                });
            });
    };

    const contextValue = {
        userState,
        userActions: {
            loginUser,
        },
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const withUser = (Payload) => {
    const UserConsumer = (props) => {
        const context = useContext(UserContext);

        return <Payload {...props} {...context} />;
    };

    return UserConsumer;
};
