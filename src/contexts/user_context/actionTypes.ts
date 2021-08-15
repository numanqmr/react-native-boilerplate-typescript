import { User } from '../../utils/models';

/** **  State and Dispatch Props  *** */
export interface UserStateProps {
    error?: string;
    user: User;
}

export const DEFAULT_USER: User = {
    firstName: '',
    lastName: '',
    name: '',
};

/** **  Initial State  *** */
export const initialState: UserStateProps = {
    user: DEFAULT_USER,
    error: undefined,
};

/** **  Action Keys  *** */
export enum TasksActionKeys {
    setUser = 'setUser',
}

/** **  Action Types  *** */
export interface TasksActionTypes {
    type: TasksActionKeys;
    user?: User;
    error?: string;
}
