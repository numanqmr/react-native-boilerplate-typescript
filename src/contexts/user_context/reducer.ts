import {
    initialState,
    TasksActionKeys,
    TasksActionTypes,
    UserStateProps
} from './actionTypes';

export default function TasksReducer(
    state: UserStateProps = initialState,
    action: TasksActionTypes,
): UserStateProps {
    const { loading, user, error, isPersonaVerified } = action;
    switch (action.type) {
        case TasksActionKeys.setUser:
            if (user) {
                return {
                    ...state,
                    user: { ...state.user, ...user, isLoggedIn: true },
                };
            }
            return state;
        default:
            return state;
    }
}
