import { NavigationContainerRef, useFocusEffect } from '@react-navigation/native';
import React, { FC, JSX, useEffect, useRef, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import NotchHelper from '../../components/NotchHelper';
import { withUser } from '../../contexts/user_context';
import { UserStateProps } from '../../contexts/user_context/actionTypes';
import { APP_STRINGS } from '../../utils/constants';
import ShouldRender from '../../utils/ShouldRender';
import styles from './homeStyles';
import AppleHealthKit, {
    HealthValue,
    HealthKitPermissions,
  } from 'react-native-health'
import { WebView } from 'react-native-webview';
import { widthPercentageToDP } from 'react-native-responsive-screen';


interface HomeProps {
    navigation: NavigationContainerRef;
    userState: UserStateProps;
}

/* Permission options */
const permissions = {
    permissions: {
      read: [AppleHealthKit.Constants.Permissions.HeartRate],
      write: [AppleHealthKit.Constants.Permissions.Steps],
    },
  } as HealthKitPermissions

const Home: FC<HomeProps> = ({ navigation, userState }: HomeProps): JSX.Element => {
    const { container, title } = styles;

    const [mounted, setMounted] = useState<boolean>(false);
    const { user } = userState;
    const webRef = useRef(null);

    function onMessage(data:any) {
      console.log("🚀 ~ file: index.tsx ~ line 39 ~ onMessage ~ data", data)
    }

    useEffect(() => {

     

    }, [mounted]);

    useFocusEffect(
        React.useCallback(() => {
            setMounted(true);

            AppleHealthKit.initHealthKit(permissions, (error: string) => {
                /* Called after we receive a response from the system */
              
                if (error) {
                  console.log('[ERROR] Cannot grant permissions!')
                }
              
                /* Can now read or write to HealthKit */
              
                const options = {
                  startDate: new Date(2022, 1, 1).toISOString(),
                }
              
                AppleHealthKit.getHeartRateSamples(
                  options,
                  (callbackError: string, results: HealthValue[]) => {
                  console.log("🚀 ~ file: index.tsx ~ line 54 ~ AppleHealthKit.initHealthKit ~ results", results)
                    /* Samples are now collected from HealthKit */
                  },
                )
              })

            return () => {
                setMounted(false);
            };
        }, []),
    );

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={container}>
          <NotchHelper />
          <WebView
            ref={webRef}
            automaticallyAdjustContentInsets
            startInLoadingState
            style={{ width: windowWidth}}
            javaScriptEnabled
            allowsBackForwardNavigationGestures
            pullToRefreshEnabled
            limitsNavigationsToAppBoundDomains
            nativeConfig
            onLoadEnd={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              console.log('WebView load end url: ', nativeEvent.url);
              webRef?.current.postMessage('Data from React Native App');
            }}
            source={{ uri: 'https://www.pulse.plus/' }} 
            onError={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
            }}

            />
        </View>
    );
};

export default withUser(Home);
