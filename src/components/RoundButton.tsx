import React, { FC, JSX } from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleProp,
    StyleSheet, Text, TextStyle, TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import { RFPercentage as RF } from 'react-native-responsive-fontsize';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { PRIMARY, SECONDARY, WHITE } from '../styles/colors';
import ShouldRender from '../utils/ShouldRender';

const styles = StyleSheet.create({
    roundButtonStyle: {
        backgroundColor: PRIMARY,
        padding: hp(1.8),
        marginTop: 5,
        borderColor: SECONDARY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonImage: {
        height: hp(3),
        width: hp(3),
    },
    buttonTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        color: WHITE,
        fontSize: RF(2),
        paddingLeft: wp('15%'),
        textAlign: 'left',
        alignSelf: 'center',
    },
    noImage: {
        textAlign: 'center',
        paddingLeft: 0,
    },
});

interface RoundButtonProps {
    title?: string;
    imgSrc?: ImageSourcePropType;
    color?: string;
    backgroundColor?: string;
    opacity?: number;
    borderRadius?: number;
    disabled?: boolean;
    onPress?: () => void;
    buttonContainerStyle?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: TextStyle;
}

const RoundButton: FC<RoundButtonProps> = ({
    title,
    imgSrc,
    color,
    backgroundColor,
    opacity,
    disabled,
    onPress,
    borderRadius,
    buttonContainerStyle,
    buttonStyle,
    textStyle,
}: RoundButtonProps): JSX.Element => {
    const { roundButtonStyle, buttonImage, buttonTitle, noImage } = styles;

    return (
        <TouchableOpacity style={buttonContainerStyle} disabled={disabled} onPress={onPress}>
                <View
                    style={[
                        roundButtonStyle,
                        {
                            backgroundColor: disabled ? SECONDARY : backgroundColor,
                            opacity,
                            borderRadius: borderRadius ?? hp(1.4),
                        },
                        buttonStyle,
                    ]}>
                    {/* Button Left Image */}
                    <ShouldRender if={imgSrc}>
                        <Image
                            style={buttonImage}
                            resizeMode="contain"
                            source={imgSrc as ImageSourcePropType}
                        />
                    </ShouldRender>

                    {/* Button Text */}
                    <ShouldRender if={title}>
                        <Text fontWeight={'bold'} style={[buttonTitle, { color }, !imgSrc && noImage, textStyle]}>
                            {' '}
                            {title}{' '}
                        </Text>
                    </ShouldRender>
                </View>
        </TouchableOpacity>
    );
};

export default RoundButton;
