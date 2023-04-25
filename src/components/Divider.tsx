import React from 'react';
import { View } from 'react-native';
import { ViewStyle } from 'react-native';

import { Color } from '../../types/Colors';
import { COLORS } from '../utils/constants';

interface DividerProps {
    /**
     * The color of the divider. Must be a valid Osmosys Color
     */
    color?: Color;
    /**
     *  The size of the divider. 'sm' for small, 'md' for medium and 'lg' for large
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Additional styling of the divider
     */
    style?: ViewStyle;
}

export const Divider = ({
    color = 'primary_blue',
    size = 'sm',
    style
}: DividerProps) => {
    return (
        <View
            style={[
                {
                    backgroundColor: COLORS[color],
                    height: 5,
                    borderRadius: 99999,
                    marginVertical: 10,
                    width:
                        size === 'sm' ? '30%' : size === 'md' ? '47%' : '100%'
                },
                style
            ]}
        />
    );
};
