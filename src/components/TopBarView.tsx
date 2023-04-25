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
    code: string;
    color?: Color;
    arrowPress?: () => void;
}

export function TopBarView({
    code,
    children,
    color = 'primary_blue',
    style,
    arrowPress,
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
                    height: (StatusBar.currentHeight ?? 30) * 2.5,
                    backgroundColor: COLORS[color],
                    flexDirection: 'row',
                    paddingTop: StatusBar.currentHeight ?? 30,
                    alignItems: 'center',
                    paddingRight: 15,
                    paddingLeft: 10,
                    width: '100%',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity onPress={arrowPress}>
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
                    {code}
                </Text>
            </View>
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
        </>
    );
}
