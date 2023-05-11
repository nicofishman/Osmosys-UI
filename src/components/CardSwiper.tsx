import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import { CardElement } from '../../types/Card';
import { FlipCardProps } from '../lib/FlipCard';

// import { Card } from './Card';

interface ICardSwiper extends FlipCardProps {
    children: [CardElement, CardElement];
    /**
     * Show dots to indicate which side is being shown
     * @default true
     */
    showDots?: boolean;
}

export const CardSwiper = ({
    children,
    style,
    showDots = true,
    ...props
}: ICardSwiper) => {
    const [isFlipped, setIsFlipped] = useState(false);

    /*
    if (
        ![Card].includes(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            children[0].type as any
        ) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ![Card].includes(children[1].type as any)
    ) {
        throw new Error('CardSwiper: Both children should be Card components');
    }
 */

    return (
        <Pressable
            style={[
                {
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
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
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bottom: 0,
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
