/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { FC, JSX, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import RoundButton from '../../components/RoundButton';
import { UserDispatchProps, withUser } from '../../contexts/user_context';
import { UserStateProps } from '../../contexts/user_context/actionTypes';
import { PRIMARY, WHITE } from '../../styles/colors';
import { APP_ROUTES, APP_STRINGS } from '../../utils/constants';
import ShouldRender from '../../utils/ShouldRender';
import styles from './loginStyle';

interface LoginProps {
    userActions: UserDispatchProps;
    userState: UserStateProps;
}

const Login: FC<LoginProps> = ({ userActions, userState }: LoginProps): JSX.Element => {
    const [loadingData, setLoadingData] = useState<boolean>(true);
    const { container, loginButton, textStyle } = styles;
    const { loginUser } = userActions;
    const { error, isLoggedIn } = userState;

    const navigation = useNavigation();

    // initial useEffect
    useEffect(() => {}, []);

    return (
        <View style={container}>
            <ShouldRender if={loadingData}>
                <ActivityIndicator animating size="large" color={WHITE} />
            </ShouldRender>
            <Text style={textStyle}>{APP_STRINGS.LOGIN_SCREEN_TITLE}</Text>
            {/* Header section */}


            {/* body section section */}

            

            {/* Button section */}
            <View style={loginButton}>
                <RoundButton
                    title="Get Started"
                    color={WHITE}
                    backgroundColor={PRIMARY}
                    borderRadius={50}
                    onPress={() => {
                        //TODO: replace with api call.
                        navigation.replace(APP_ROUTES.HOME_SCREEN)
                    }}
                    textStyle={{ fontSize: RFPercentage(2.6), fontWeight: 'bold' }}
                    buttonStyle={{}}
                />
            </View>
            {/* footer section */}
        </View>
    );
};

export default withUser(Login);
