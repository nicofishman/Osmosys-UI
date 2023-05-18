import React from 'react';
import {
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    ViewProps
} from 'react-native';

import { Color } from '../../types/Colors';
import { COLORS } from '../utils/constants';

import { Icon } from './CardIcon';

interface ITopBarView extends ViewProps {
    text: string;
    color?: Color;
    onArrowPress?: () => void;
}

export function TopBarView({
    text,
    children,
    color = 'primary_blue',
    style,
    onArrowPress,
    ...props
}: ITopBarView) {
    const colorsToLight: Color[] = [
        'primary_blue',
        'primary_gray',
        'primary_orange',
        'secondary_blue',
        'secondary_cyan'
    ];

    return (
        <>
            <StatusBar
                backgroundColor={COLORS[color]}
                barStyle={
                    colorsToLight.includes(color)
                        ? 'light-content'
                        : 'dark-content'
                }
            />
            <View
                style={{
                    // height: (StatusBar.currentHeight ?? 30) * 2.5,
                    backgroundColor: COLORS[color],
                    flexDirection: 'row',
                    paddingTop: StatusBar.currentHeight ?? 30,
                    paddingBottom: 10,
                    alignItems: 'center',
                    paddingRight: 15,
                    paddingLeft: 10,
                    width: '100%',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity onPress={onArrowPress}>
                    <Icon
                        color={color === 'background' ? 'black' : 'white'}
                        library='AntDesign'
                        name='arrowleft'
                        size={25}
                    />
                </TouchableOpacity>
                <Text
                    ellipsizeMode='tail'
                    numberOfLines={1}
                    style={{
                        fontFamily: 'Montserrat_800ExtraBold',
                        fontSize: 30,
                        color: color === 'background' ? 'black' : 'white'
                    }}
                >
                    {text}
                </Text>
            </View>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    enabled={false}
                    style={[
                        {
                            flex: 1
                        },
                        style
                    ]}
                    {...props}
                > */}
            <View
                style={[
                    {
                        flex: 1
                    },
                    style
                ]}
                {...props}
            >
                {children}
            </View>
            {/* </KeyboardAvoidingView>
            </TouchableWithoutFeedback> */}
        </>
    );
}
