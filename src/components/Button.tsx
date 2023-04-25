import React, { useCallback, useState } from 'react';
import {
    GestureResponderEvent,
    Text,
    TextStyle,
    TouchableHighlight,
    TouchableHighlightProps
} from 'react-native';

import { COLORS, TEXT_COLORS } from '../utils/constants';
import { LightenDarkenColor } from '../utils/color';
import { Color, TextColor } from '../../types/Colors';

import { Loader } from './Loader';

export interface IButton extends TouchableHighlightProps {
    /**
     * The color of the button. Must be a valid Osmosys Color
     */
    backgroundColor?: Color;
    /**
     * The style of the text
     */
    textStyle?: TextStyle & { color?: TextColor };
    /**
     * The size of the button. 'sm' for small, 'md' for medium and 'lg' for large
     */
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    children,
    backgroundColor = 'secondary_blue',
    textStyle,
    size = 'lg',
    style,
    onPress,
    underlayColor,
    ...rest
}: IButton) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlePress = useCallback(async (e: GestureResponderEvent) => {
        setIsLoading(true);
        await onPress?.(e);
        setIsLoading(false);
    }, []);

    const { color: textColor, ...textStyleRest } = textStyle ?? {};

    const width =
        size === 'sm'
            ? '30%'
            : size === 'md'
            ? '47%'
            : size === 'lg'
            ? '100%'
            : 'auto';

    return (
        <TouchableHighlight
            disabled={isLoading}
            style={[
                {
                    backgroundColor: COLORS[backgroundColor],
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: width,
                    width: width,
                    elevation: 10,
                    shadowColor: '#000',
                    alignContent: 'center'
                },
                style
            ]}
            underlayColor={
                underlayColor ??
                LightenDarkenColor(COLORS[backgroundColor], -10)
            }
            onPress={handlePress}
            {...rest}
        >
            {isLoading ? (
                <Loader
                    style={{
                        paddingVertical: 18
                    }}
                />
            ) : (
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={[
                        {
                            textTransform: 'uppercase',
                            fontFamily: 'Montserrat_700Bold',
                            paddingVertical: 10,
                            fontSize: 20,
                            paddingHorizontal:
                                size === 'sm' ? 5 : size === 'md' ? 7 : 2,
                            width: '100%',
                            textAlign: 'center'
                        },
                        {
                            color: TEXT_COLORS[textColor ?? 'white']
                        },
                        textStyleRest
                    ]}
                >
                    {children}
                </Text>
            )}
        </TouchableHighlight>
    );
};
