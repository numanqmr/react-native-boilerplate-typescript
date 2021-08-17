import { NavigationContainerRef, useFocusEffect } from '@react-navigation/native';
import React, { FC, JSX, useState } from 'react';
import { Text, View } from 'react-native';
import NotchHelper from '../../components/NotchHelper';
import { withUser } from '../../contexts/user_context';
import { UserStateProps } from '../../contexts/user_context/actionTypes';
import { APP_STRINGS } from '../../utils/constants';
import ShouldRender from '../../utils/ShouldRender';
import styles from './homeStyles';

interface HomeProps {
    navigation: NavigationContainerRef;
    userState: UserStateProps;
}

const Home: FC<HomeProps> = ({ navigation, userState }: HomeProps): JSX.Element => {
    const { container, title } = styles;

    const [mounted, setMounted] = useState<boolean>(false);
    const { user } = userState;

    useFocusEffect(
        React.useCallback(() => {
            setMounted(true);
            return () => {
                setMounted(false);
            };
        }, []),
    );

    return (
        <View style={container}>
            <NotchHelper />
            <ShouldRender if={mounted}>
                {/* hehehe */}
                <Text style={title}>{APP_STRINGS.HOME_SCREEN_TITLE}</Text>
            </ShouldRender>
        </View>
    );
};

export default withUser(Home);
