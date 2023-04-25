import React from 'react';
import {
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';
import { TouchableOpacity } from 'react-native';

import { Color, TextColor } from '../../types/Colors';
import { CardIconElement, Library } from '../../types/Icon';
import { COLORS, TEXT_COLORS } from '../utils/constants';

interface IInputCard extends TextInputProps {
    onChangeText: (text: string) => void;
    onSend: () => void;
    value: string;
    cardStyle?: ViewStyle & {
        backgroundColor?: Color;
    };
    endIcon?: CardIconElement<Library>;
    placeholderTextColor?: TextColor;
    placeholderStyle?: TextStyle;
}

export const InputCard = ({
    placeholderTextColor = 'gray',
    value,
    onSend,
    endIcon,
    style,
    onChangeText,
    cardStyle,
    placeholder,
    placeholderStyle,
    ...props
}: IInputCard) => {
    function handleChangeText(text: string) {
        onChangeText(text);
    }

    const { backgroundColor, ...rest } = cardStyle ?? {};

    return (
        <View
            style={[
                {
                    paddingHorizontal: 16,
                    backgroundColor: COLORS[backgroundColor ?? 'primary_blue'],
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 14,
                    flexDirection: 'row',
                    borderRadius: 5,
                    elevation: 10,
                    shadowColor: '#000000'
                },
                rest
            ]}
        >
            {placeholder && value.length === 0 && (
                <Text
                    style={[
                        {
                            flex: 1,
                            left: 16,
                            opacity: 0.5,
                            position: 'absolute',
                            fontFamily: 'Nunito_700Bold',
                            color: TEXT_COLORS[placeholderTextColor ?? 'gray']
                        },
                        placeholderStyle
                    ]}
                >
                    {placeholder}
                </Text>
            )}
            <TextInput
                style={[
                    {
                        flex: 1,
                        fontFamily: 'Montserrat_800ExtraBold',
                        color: TEXT_COLORS['black']
                    },
                    style
                ]}
                value={value}
                onChangeText={handleChangeText}
                {...props}
            />
            {endIcon && (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={onSend}
                >
                    {endIcon}
                </TouchableOpacity>
            )}
        </View>
    );
};
