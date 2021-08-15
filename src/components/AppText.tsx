import React, { FC, useCallback } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { FontWeightType } from '../utils/types';

interface AppTextProps extends TextProps {
    fontWeight?: FontWeightType;
    italic?: boolean;
    style?: TextStyle | TextStyle[];
}

const AppText: FC<AppTextProps> = ({
    fontWeight = 'regular',
    italic = false,
    style,
    children,
    ...textProps
}) => {
    const getWeight = useCallback(() => {
        if (fontWeight === 'regular' && italic) {
            return '';
        }
        return fontWeight
            ?.split('-')
            .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
            .join('');
    }, [fontWeight, italic]);

    return (
        <Text
            style={[
                { fontFamily: `NunitoSans-${getWeight()}${italic ? 'Italic' : ''}` },
                ...(Array.isArray(style) ? style : [style]),
            ]}
            {...textProps}>
            {children}
        </Text>
    );
};

export default AppText;
