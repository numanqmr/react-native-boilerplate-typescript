import { DEVELOPMENT_BASE_URL } from '@env';
import axios from 'axios';
import UserDataParser from './parser';

// create token for agora video call
export const loginUser = () =>
    new Promise((resolve, reject) => {
        const reqBody = {}; //dummy user request body
        axios
            .post(`${DEVELOPMENT_BASE_URL}`, reqBody)
            .then((response) => {
                // handle success
                const user = UserDataParser(response?.data);
                resolve(user);
            })
            .catch((error) => {
                // handle error
                reject(error.message);
            });
    });
