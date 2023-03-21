import React from 'react';
import { Text as ReactNativeText, StyleSheet, TextStyle } from 'react-native';
import { select } from '@storybook/addon-knobs';

import { TEXT_COLORS } from '../../../src/constants';

interface Props extends React.ComponentProps<typeof ReactNativeText> {
    children: React.ReactNode;
    color?: keyof typeof TEXT_COLORS;
}

export function Text({ children, color = 'white', ...props }: Props) {
    const textColor = select<keyof typeof TEXT_COLORS>(
        'TextColor',
        TEXT_COLORS,
        color
    );

    return (
        <ReactNativeText
            {...props}
            style={[
                props.style,
                textStyles.truncate,
                {
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 20,
                    color: textColor
                }
            ]}
        >
            {children}
        </ReactNativeText>
    );
}

export function Title({ children, color = 'white', ...props }: Props) {
    const textColor = select<keyof typeof TEXT_COLORS>(
        'TitleColor',
        TEXT_COLORS,
        color
    );

    return (
        <ReactNativeText
            adjustsFontSizeToFit
            numberOfLines={1}
            {...props}
            style={[
                {
                    fontFamily: 'Montserrat_800ExtraBold',
                    fontSize: 32,
                    color: textColor
                },
                textStyles.truncate,
                props.style
            ]}
        >
            {children}
        </ReactNativeText>
    );
}

// specify StyleSheet.create with generics to TextStyles

const textStyles = StyleSheet.create<{
    [key: string]: TextStyle;
}>({
    truncate: {
        maxWidth: '100%',
        overflow: 'hidden'
    }
});
