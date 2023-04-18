import React from 'react';
import { Text as RNText, TextStyle, type TextProps } from 'react-native';

import { CardTextItem } from '../../types/TextType';
import { TEXT_COLORS } from '../constants';
import { colorAndRest, getText } from '../utils/cardTextUtils';
import { TextColor } from '../../types/Colors';

import Icon from './CardIcon';

interface ICardText extends TextProps {
    text: CardTextItem;
}

const CardText = ({ text: textObj, style, ...props }: ICardText) => {
    const text = getText(textObj);
    const { color: textColor, ...rest } = colorAndRest(textObj);
    const restItem = rest as {
        iconPosition?: 'left' | 'right';
        includeIcon?: true;
        icon?: React.ReactNode;
        style?: TextStyle & {
            color?: (typeof TEXT_COLORS)[TextColor];
        };
    };

    const iconPosition =
        typeof textObj === 'object'
            ? textObj.iconPosition ?? 'left'
            : undefined;

    const icon =
        typeof textObj === 'object' && textObj.includeIcon
            ? textObj.icon
            : undefined;

    // check if icon.type is React.JSXElementConstructor<CardIconProps<L>>
    if (icon && icon.type !== Icon) {
        throw new Error(
            `CardText (text: ${text}): Icon prop should be a CardIcon component`
        );
    }

    return (
        <RNText
            ellipsizeMode='tail'
            numberOfLines={2}
            style={[
                {
                    fontSize: 16,
                    minWidth: '50%',
                    maxWidth: '50%',
                    alignItems: 'center',
                    textAlign: 'left',
                    textAlignVertical: 'center',
                    paddingLeft: icon ? 5 : 0,
                    ...restItem.style
                },
                style,
                {
                    color: TEXT_COLORS[textColor ?? 'white']
                }
            ]}
            {...props}
        >
            {iconPosition === 'left' && icon}
            <RNText
                style={[
                    {
                        fontFamily:
                            restItem.style?.fontFamily ?? 'Nunito_700Bold'
                    }
                ]}
            >{`${iconPosition === 'left' ? ' ' : ''}${text}${
                iconPosition === 'right' ? ' ' : ''
            }`}</RNText>
            {iconPosition === 'right' && icon}
        </RNText>
    );
};

export default CardText;
