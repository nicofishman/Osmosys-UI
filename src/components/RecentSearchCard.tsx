import React, { useState } from 'react';
import { Pressable, Text, View, ViewProps } from 'react-native';

import { Color } from '../../types/Colors';
import { COLORS } from '../constants';

import Icon from './CardIcon';

interface IRecentSearchCard extends ViewProps {
    /**
     * The code of the product
     */
    code: string;
    /**
     * The name of the product
     */
    name: string;

    /**
     * Function to be called when the chevron is pressed
     */
    onPress?: () => void;

    /**
     * The color of the card. Must be a valid Osmosys Color
     */
    color?: Color;
}

const RecentSearchCard = ({
    color = 'primary_blue',
    code,
    name,
    onPress,
    style,
    ...rest
}: IRecentSearchCard) => {
    const [numberOfLines, setNumberOfLines] = useState(1);

    return (
        <Pressable
            style={[
                {
                    borderRadius: 10,
                    backgroundColor: '#FFF',
                    width: '100%',
                    shadowColor: '#000000',
                    elevation: 10
                },
                style
            ]}
            onPress={() => setNumberOfLines(numberOfLines === 1 ? 2 : 1)}
            {...rest}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    backgroundColor: COLORS[color],
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 32,
                    minHeight: 32
                }}
            >
                <Text
                    lineBreakMode='tail'
                    numberOfLines={1}
                    style={{
                        color: '#FFF',
                        fontFamily: 'Montserrat_800ExtraBold',
                        fontSize: 16
                    }}
                >
                    {code}
                </Text>
            </View>
            <View
                style={{
                    paddingLeft: 10,
                    height: numberOfLines === 2 && name.length > 20 ? 110 : 70,
                    flexDirection: 'row'
                }}
            >
                <Text
                    lineBreakMode='tail'
                    numberOfLines={numberOfLines}
                    style={{
                        flex: 1,
                        color: COLORS[color],
                        fontFamily: 'Montserrat_800ExtraBold',
                        fontSize: 32,
                        paddingRight: 14,
                        paddingVertical: 14
                    }}
                >
                    {name}
                </Text>
                <Pressable
                    style={{
                        height:
                            numberOfLines === 2 && name.length > 20 ? 110 : 70,
                        alignItems: 'center',
                        width: 35,
                        justifyContent: 'center'
                    }}
                    onPress={onPress}
                >
                    <Icon
                        color={color}
                        library='Entypo'
                        name='chevron-right'
                        size={24}
                    />
                </Pressable>
            </View>
        </Pressable>
    );
};

export default RecentSearchCard;
