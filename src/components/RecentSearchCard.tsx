import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ViewProps } from 'react-native';

import { COLORS } from '../constants';
import { Color } from '../../types/Colors';

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
     * The color of the card. Must be a valid Osmosys Color
     */
    color?: Color;
}

const RecentSearchCard = ({
    color = 'primary_blue',
    code,
    name,
    style,
    ...rest
}: IRecentSearchCard) => {
    const [numberOfLines, setNumberOfLines] = React.useState(1);

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
                    paddingRight: 16,
                    paddingVertical: 14,
                    height: numberOfLines === 2 ? 140 : 100
                }}
            >
                <Text
                    lineBreakMode='tail'
                    numberOfLines={numberOfLines}
                    style={{
                        color: COLORS[color],
                        fontFamily: 'Montserrat_800ExtraBold',
                        fontSize: 32
                    }}
                >
                    {name}
                </Text>
            </View>
        </Pressable>
    );
};

export default RecentSearchCard;
