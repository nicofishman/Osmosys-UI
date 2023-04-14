import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import FlipCard, { FlipCardProps } from 'react-native-flip-card';

import { CardElement } from '../../types/Card';

import Card from './Card';

interface CardSwiperProps extends FlipCardProps {
    children: [CardElement, CardElement];
    /**
     * Show dots to indicate which side is being shown
     * @default true
     */
    showDots?: boolean;
}

const CardSwiper = ({
    children,
    style,
    showDots = true,
    ...props
}: CardSwiperProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // check that both children are cards
    if (
        ![Card.SingleData, Card.MultipleData].includes(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            children[0].type as any
        ) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ![Card.SingleData, Card.MultipleData].includes(children[1].type as any)
    ) {
        console.log(children[0].type === Card.SingleData);
        console.log(children[1].type === Card.MultipleData);

        throw new Error('CardSwiper: Both children should be Card components');
    }

    return (
        <Pressable
            style={[
                {
                    width: '100%',
                    height: '100%',
                    minHeight: 100
                },
                style
            ]}
            onPress={() => {
                setIsFlipped(!isFlipped);
            }}
        >
            <FlipCard
                clickable={false}
                flip={isFlipped}
                flipHorizontal={true}
                flipVertical={false}
                style={{
                    width: '100%'
                }}
                {...props}
            >
                {children}
            </FlipCard>
            {showDots && (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                        width: '100%'
                    }}
                >
                    <Pressable
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: isFlipped ? '#4D4D4D' : 'black',
                            marginHorizontal: 5
                        }}
                        onPress={() => {
                            setIsFlipped(false);
                        }}
                    />
                    <Pressable
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: isFlipped ? 'black' : '#4D4D4D',
                            marginHorizontal: 5
                        }}
                        onPress={() => {
                            setIsFlipped(true);
                        }}
                    />
                </View>
            )}
        </Pressable>
    );
};

export default CardSwiper;
