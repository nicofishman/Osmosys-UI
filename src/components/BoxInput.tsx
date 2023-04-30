import React from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { Color } from '../../types/Colors';
import { CardIconElement, Library } from '../../types/Icon';
import { COLORS, TEXT_COLORS } from '../utils/constants';

import { IInput } from './Input';

type IBoxInput = Omit<IInput, 'color' | 'type' | 'leftIcon'> & {
    onButtonPress: () => void;
    value: string;
    boxStyle?: ViewStyle & {
        backgroundColor?: Color;
    };
    rightIcon?: CardIconElement<Library>;
    type?: 'text' | 'number';
};

export const BoxInput = ({
    value,
    onButtonPress,
    rightIcon,
    style,
    onChangeText,
    boxStyle,
    placeholder,
    placeholderStyle,
    type = 'text',
    ...props
}: IBoxInput) => {
    function handleChangeText(text: string) {
        onChangeText(text);
    }

    const { color: placeholderColor, ...placeholderStyleRest } =
        placeholderStyle ?? {};
    const { backgroundColor, ...rest } = boxStyle ?? {};

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
                            color: placeholderColor ?? TEXT_COLORS['gray']
                        },
                        placeholderStyleRest
                    ]}
                >
                    {placeholder}
                </Text>
            )}
            <TextInput
                keyboardType={type === 'number' ? 'numeric' : 'default'}
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
            {rightIcon && (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={onButtonPress}
                >
                    {rightIcon}
                </TouchableOpacity>
            )}
        </View>
    );
};
