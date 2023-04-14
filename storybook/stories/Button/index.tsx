import React from 'react';
import { TouchableHighlight } from 'react-native';
import { select } from '@storybook/addon-knobs';

import { LightenDarkenColor } from '../../../src/utils/color';
import { COLORS } from '../../../src/constants';

interface ButtonProps extends React.ComponentProps<typeof TouchableHighlight> {
    /**
     * The text of the button. This should be a string.
     */
    children: React.ReactNode;
    /**
     * The background color of the button. This should be a key of the `COLORS` object.
     */
    backgroundColor?: keyof typeof COLORS | null;
    /**
     * The function to call when the button is pressed.
     */
    onPress?: () => void;
}

export default function Button({
    onPress = () => {},
    backgroundColor = null,
    children = '',
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

    const underlayBackgroundColor = LightenDarkenColor(background, 20);

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
