import React from 'react';
import { ScrollView, Text, View, ViewStyle } from 'react-native';

import { Color } from '../../types/Colors';
import { COLORS } from '../utils/constants';

interface ITable<T extends string> {
    head: {
        id: T;
        label: string;
    }[];
    data: Array<{
        [key in T]: string;
    }>;
    borderColor?: Color;
    cellStyle?: ViewStyle;
    headStyle?: ViewStyle;
    style?: ViewStyle;
    stripped?: boolean;
}

const BORDER_WIDTH = 1.5;

export function Table<THead extends string>({
    head,
    data,
    headStyle,
    cellStyle,
    style,
    stripped = false,
    borderColor = 'primary_blue',
    ...props
}: ITable<THead>) {
    const rowsHeight = Array.from({ length: data.length }).map(() => 1.5);

    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        const vals = Object.values(row) as string[];

        if (vals.some((value) => value.length >= 30)) {
            rowsHeight[i] = 2;
        }
    }

    return (
        <ScrollView
            nestedScrollEnabled
            showsHorizontalScrollIndicator
            bounces={false}
            contentContainerStyle={style}
            {...props}
        >
            <ScrollView
                horizontal
                showsVerticalScrollIndicator
                style={[
                    style,
                    {
                        width: '100%'
                    }
                ]}
                {...props}
            >
                <>
                    {head.map((item, headIndex) => {
                        return (
                            <View
                                key={item.id}
                                style={{
                                    flexDirection: 'column',
                                    maxWidth: 200
                                }}
                            >
                                <Cell
                                    isHead
                                    borderColor={borderColor}
                                    style={{
                                        ...headStyle,
                                        borderTopWidth: BORDER_WIDTH,
                                        borderLeftWidth:
                                            headIndex === 0 ? BORDER_WIDTH : 0
                                    }}
                                >
                                    {item.label}
                                </Cell>
                                {data.map((row, index) => {
                                    const height = rowsHeight[index];
                                    // const height = 1.5;
                                    const isStripped =
                                        stripped && index % 2 === 0;

                                    return (
                                        <Cell
                                            key={`${item.id}-${index}`}
                                            borderColor={borderColor}
                                            stripped={isStripped}
                                            style={{
                                                ...cellStyle,
                                                height: height * 30,
                                                borderLeftWidth:
                                                    headIndex === 0
                                                        ? BORDER_WIDTH
                                                        : 0
                                            }}
                                        >
                                            {row[item.id]}
                                        </Cell>
                                    );
                                })}
                            </View>
                        );
                    })}
                </>
            </ScrollView>
        </ScrollView>
    );
}

interface ICell {
    children: string;
    style?: ViewStyle;
    isHead?: boolean;
    borderColor: Color;
    stripped?: boolean;
}

function Cell({
    children,
    style,
    borderColor,
    stripped = false,
    isHead = false
}: ICell) {
    return (
        <View
            style={[
                {
                    padding: 10,
                    borderBottomWidth: BORDER_WIDTH,
                    borderRightWidth: BORDER_WIDTH,
                    borderColor: COLORS[borderColor],
                    backgroundColor: stripped ? '#ddd' : '#FFF'
                },
                style
            ]}
        >
            <Text
                numberOfLines={isHead ? 1 : 2}
                style={{
                    fontFamily: isHead
                        ? 'Nunito_800ExtraBold'
                        : 'Nunito_500Medium',
                    textAlign: 'left'
                }}
            >
                {children}
            </Text>
        </View>
    );
}
