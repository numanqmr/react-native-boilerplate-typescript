export interface User {
    email?: string;
    firstName: string;
    lastName: string;
    name: string;
    picture?: string;
    emailVerified?: boolean;
    accessToken?: string;
    refreshToken?: string;
    isLoggedIn?: boolean;
    phoneNumber?: string;
}