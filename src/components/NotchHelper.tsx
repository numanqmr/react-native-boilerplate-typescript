import React, { FC } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ShouldRender from '../utils/ShouldRender';

const styles = StyleSheet.create({
    notchView: {
        width: '100%',
        height: getStatusBarHeight(),
    },
});

const NotchHelper: FC = () => (
    <ShouldRender if={Platform.OS === 'ios'}>
        <View style={styles.notchView} />
    </ShouldRender>
);

export default NotchHelper;
