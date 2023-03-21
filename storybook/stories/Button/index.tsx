import React from 'react';
import { TouchableHighlight } from 'react-native';
import { select } from '@storybook/addon-knobs';

import { LightenDarkenColor } from '../../../src/utils/color';
import { COLORS } from '../../../src/constants';

interface ButtonProps extends React.ComponentProps<typeof TouchableHighlight> {
    children: React.ReactNode;
    backgroundColor?: keyof typeof COLORS | null;
    onPress?: () => void;
}

export default function Button({
    onPress = () => {},
    backgroundColor = null,
    children = null,
    style,
    ...props
}: ButtonProps) {
    const background = backgroundColor
        ? COLORS[backgroundColor]
        : select<keyof typeof COLORS>(
              'BackgroundColor',
              COLORS,
              'primary_orange'
          );

    const underlayBackgroundColor = LightenDarkenColor(background, 10);

    return (
        <TouchableHighlight
            {...props}
            style={[
                {
                    backgroundColor: background,
                    minHeight: 42,
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: 190,
                    maxWidth: '100%'
                    // width: '100%',
                },
                style
            ]}
            underlayColor={
                // lightens the background color by 20%
                underlayBackgroundColor
            }
            onPress={onPress}
        >
            {children}
        </TouchableHighlight>
    );
}
