import AsyncStorage from '@react-native-async-storage/async-storage';

export enum StoreKey {
    token = 'token',
}

export const StoreData = async (key: StoreKey, value: Object) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error(e);
    }
};

export const RetrieveData = (key: StoreKey) =>
    new Promise((resolve, reject) => {
        AsyncStorage.getItem(key)
            .then((value) => {
                if (value !== null) {
                    resolve(JSON.parse(value));
                } else {
                    reject(Error('Not found'));
                }
            })
            .catch(reject);
    });

export const ClearAsyncStorage = async () => {
    await AsyncStorage.clear();
};
