import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';
import { select } from '@storybook/addon-knobs';

import { TEXT_COLORS } from '../../../src/constants';

interface Props extends React.ComponentProps<typeof RNText> {
    // `Children` refers to the content of the component. This should be a string.
    children: string;
    /**
     * The color of the text. This should be a key of the `TEXT_COLORS` object.
     */
    color?: keyof typeof TEXT_COLORS;
}

export function Text({ children, color = 'white', ...props }: Props) {
    const textColor = select<keyof typeof TEXT_COLORS>(
        'TextColor',
        TEXT_COLORS,
        color
    );

    return (
        <RNText
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
        </RNText>
    );
}

export function Title({ children, color = 'white', ...props }: Props) {
    const textColor = select<keyof typeof TEXT_COLORS>(
        'TitleColor',
        TEXT_COLORS,
        color
    );

    return (
        <RNText
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
        </RNText>
    );
}

const textStyles = StyleSheet.create<{
    [key: string]: TextStyle;
}>({
    truncate: {
        maxWidth: '100%',
        overflow: 'hidden'
    }
});

// https://stackoverflow.com/a/59733914/21383202
// <Box1Item>
//     <Text color="white">key1</Text>
//     <Text color="white">value1</Text>
//     <Text color="white">key1</Text>
//     <Text color="white">value2</Text>
// </Box1Item>

// type IProps = {
//     includeIcon: false;
//     icon: never;
// } | {
//     includeIcon: true;
//     icon: React.ReactNode;
// }
