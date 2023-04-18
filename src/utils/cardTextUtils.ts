import { TextProps } from 'react-native/types';

import { TextColor } from '../../types/Colors';
import { CardIconElement, Library } from '../../types/Icon';
import { CardTextItem, CardTextWithProps } from '../../types/TextType';

/**
 * This function is used to get the color from the style object and return it separated from the rest of the style object.
 * @param textWithStyle The text or text props.
 * @returns The color and the rest of the style object.
 */
export function colorAndRest(textWithStyle: CardTextItem) {
    const defaultStyle = {
        color: 'white'
    } as {
        color?: TextColor;
    } & TextProps;

    if (typeof textWithStyle === 'string') {
        return {
            color: defaultStyle.color,
            includeIcon: false,
            icon: undefined,
            iconPosition: undefined
        };
    }

    const restItem = omitColorFromStyle(textWithStyle);

    const rest = {
        color: textWithStyle.style?.color ?? 'white',
        ...restItem
    };

    return rest;
}

/**
 * This function is used to omit the color from the style object.
 * @param style The style object.
 * @returns The rest of the style object.
 */
export function omitColorFromStyle(
    item: {
        text: string;
    } & (CardTextWithProps & TextProps)
) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { text: _text, ...rest } = item;

    return rest;
}

/**
 * This function is used to get the text from the text or text props.
 * @param textOrTextProps The text or text props.
 * @returns The text.
 */
export function getText(textOrTextProps: CardTextItem) {
    return typeof textOrTextProps === 'string'
        ? textOrTextProps
        : textOrTextProps.text;
}

/**
 * This function prepares the input text or text props to be used in the CardText component.
 * @param item The text or text props.
 * @returns All props ready to be used in the CardText component.
 */
export function formatTextItem(item: CardTextItem) {
    const text = getText(item);
    const { color: itemColor, ...restItem } = colorAndRest(item);
    const {
        icon: itemIcon,
        iconPosition: itemIconPosition,
        includeIcon: itemIncludeIcon,
        ...restItem2
    } = restItem;

    const itemIconObj = (
        itemIncludeIcon === true
            ? {
                  icon: itemIcon ?? null,
                  iconPosition: itemIconPosition ?? 'left',
                  includeIcon: itemIncludeIcon
              }
            : {
                  includeIcon: false as const,
                  icon: null,
                  iconPosition: null
              }
    ) as
        | {
              icon: CardIconElement<Library>;
              iconPosition: 'left' | 'right';
              includeIcon: true;
          }
        | {
              icon: null;
              iconPosition: null;
              includeIcon: false;
          };

    return {
        text: text,
        color: itemColor,
        ...itemIconObj,
        ...restItem2
    };
}
