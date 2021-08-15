import { User } from '../../../utils/models';

const UserDataParser = (res: any): User => ({
    email: res?.email ?? '',
    firstName: res?.givenName ?? '',
    lastName: res.familyName,
    name: res.name,
    picture: res?.picture ?? '',
    emailVerified: res?.emailVerified ?? false,
});

export default UserDataParser;
