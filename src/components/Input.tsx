import React, { useCallback, useState } from 'react';
import {
    Animated,
    TextInput,
    TextInputProps,
    TextStyle,
    View
} from 'react-native';

import { Color } from '../../types/Colors';
import { CardIconElement, Library } from '../../types/Icon';
import { COLORS } from '../constants';

import Icon from './CardIcon';

type IInput = Omit<TextInputProps, 'onChangeText'> & {
    value: string;
    name: string;
    /**
     * Function to be called when the input value changes
     * @param name: name of the input
     * @param text: value of the input
     * @returns
     */
    onChangeText: (text: string, name: string) => void;
    color?: Color;
    /**
     *  Icon to be displayed at the start of the input
     */
    startDecorator?: CardIconElement<Library>;
    /**
     * Placeholder Style
     */
    placeholderStyle?: TextStyle;
    /**
     * Text Input Style
     */
    style?: TextStyle;
} & (
        | {
              type?: 'text' | 'number';
              /**
               * Icon to be displayed at the end of the input
               */
              endDecorator?: CardIconElement<Library>;
          }
        | {
              type: 'password';

              /**
               * Icon to be displayed at the end of the input
               */
              endDecorator?: never;
          }
    );

export const Input = ({
    name,
    value,
    color = 'primary_blue',
    type = 'text',
    onChangeText,
    startDecorator,
    endDecorator,
    placeholder,
    placeholderTextColor,
    placeholderStyle = {},
    style = {},
    ...rest
}: IInput) => {
    const [isPassword, setIsPassword] = useState(type === 'password');
    const [isFocused, setIsFocused] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [animatedIsFocused] = useState(new Animated.Value(1));

    const labelInitialSize = style?.fontSize ?? 18;
    const inputFontSize = placeholderStyle.fontSize ?? 12;

    const startAnimation = useCallback(() => {
        Animated.timing(animatedIsFocused, {
            useNativeDriver: false,
            toValue: showInput ? 1 : 0,
            duration: 150
        }).start(() => {
            if (!showInput) {
                setShowInput(true);
            }
        });
    }, [animatedIsFocused, showInput]);

    const animationLabelFontSize = useCallback(() => {
        const fontAdjust = {
            fontSize: animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [inputFontSize, labelInitialSize]
            })
        };

        return fontAdjust;
    }, [animatedIsFocused, inputFontSize, labelInitialSize]);

    function handleFocus() {
        if (value.length > 0) {
            return;
        }
        setIsFocused(true);
        if (!showInput) {
            startAnimation();
        }
    }

    function handleBlur() {
        if (value.length > 0) {
            return;
        }
        setIsFocused(false);
        if (!value) {
            setShowInput(false);

            startAnimation();
        }
    }

    if (startDecorator?.props.size && startDecorator.props.size > 40) {
        throw new Error(
            'The size of the startDecorator must be less than or equal to 40'
        );
    }
    if (endDecorator?.props.size && endDecorator.props.size > 40) {
        throw new Error(
            'The size of the endDecorator must be less than or equal to 40'
        );
    }

    return (
        <View
            style={{
                width: '100%',
                position: 'relative',
                height: 40,
                marginVertical: 10
            }}
        >
            <Animated.Text
                style={[
                    {
                        position: 'absolute',
                        top: 10,
                        left:
                            startDecorator && !isFocused && value.length === 0
                                ? (startDecorator.props.size ?? 10) + 10
                                : 0,
                        width: '100%',
                        color: placeholderTextColor ?? '#939393',
                        textTransform: 'uppercase',
                        height: '100%',
                        fontSize: 22,
                        fontFamily: 'Nunito_600SemiBold',
                        transform: [
                            {
                                translateY: isFocused ? -25 : 0
                            }
                        ]
                    },
                    animationLabelFontSize()
                ]}
            >
                {placeholder}
            </Animated.Text>
            {startDecorator && (
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {startDecorator}
                </View>
            )}
            <TextInput
                keyboardType={type === 'number' ? 'numeric' : 'default'}
                secureTextEntry={isPassword}
                style={[
                    {
                        borderBottomColor: COLORS[color],
                        borderBottomWidth: isFocused ? 2 : 1,
                        fontFamily: 'Nunito_600SemiBold',
                        fontSize: 22,
                        height: '100%',
                        paddingLeft: startDecorator
                            ? (startDecorator.props.size ?? 10) + 10
                            : 0,
                        paddingRight: endDecorator
                            ? (endDecorator.props.size ?? 10) + 10
                            : 0
                    },
                    style
                ]}
                value={value}
                onBlur={handleBlur}
                onChangeText={(text) => onChangeText(text, name)}
                onFocus={handleFocus}
                {...rest}
            />
            {(endDecorator || type === 'password') && (
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {type === 'password' ? (
                        <Icon
                            color='black'
                            library='Entypo'
                            name={isPassword ? 'eye-with-line' : 'eye'}
                            size={25}
                            onPress={() => setIsPassword(!isPassword)}
                        />
                    ) : (
                        endDecorator
                    )}
                </View>
            )}
        </View>
    );
};