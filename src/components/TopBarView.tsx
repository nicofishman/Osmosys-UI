import React from 'react';
import {
    Keyboard,
    TouchableWithoutFeedback,
    ViewProps,
    View,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';

import { Color } from '../../types/Colors';
import { COLORS } from '../constants';

import Icon from './CardIcon';

interface ITopBarView extends ViewProps {
    code: string;
    color?: Color;
    arrowPress?: () => void;
}

function TopBarView({
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
        <TouchableWithoutFeedback>
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
                    {...props}
                    style={[
                        {
                            flex: 1
                            // marginTop: -((StatusBar.currentHeight ?? 30) * 1.5)
                        },
                        style
                    ]}
                >
                    {children}
                </View>
            </>
        </TouchableWithoutFeedback>
    );
}

export default TopBarView;
