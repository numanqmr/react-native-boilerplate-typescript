import React, { FC, useCallback } from 'react';
import { TextInput, TextInputProps, TextStyle } from 'react-native';
import { FontWeightType } from '../utils/types';

interface AppTextProps extends TextInputProps {
    fontWeight?: FontWeightType;
    italic?: boolean;
    style?: TextStyle | TextStyle[];
}

const AppText: FC<AppTextProps> = ({
    fontWeight = 'regular',
    italic = false,
    style,
    children,
    ...textInputProps
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
        <TextInput
            style={[
                { fontFamily: `NunitoSans-${getWeight()}${italic ? 'Italic' : ''}` },
                ...(Array.isArray(style) ? style : [style]),
            ]}
            {...textInputProps}>
            {children}
        </TextInput>
    );
};

export default AppText;
