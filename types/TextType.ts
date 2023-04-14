import type { TextProps } from 'react-native';

import { TEXT_COLORS } from '../src/constants';

import { CardIconElement, Library } from './Icon';

/**
 * Each text inside a Card. It can just a string with the desired text, or it can include styles and an icon as well
 */
export type CardTextItem =
    | string
    | ({ text: string } & (CardTextWithProps & TextProps));

export type CardTextWithProps = {
    text: string;
    style?: {
        color?: keyof typeof TEXT_COLORS;
    };
} & (
    | {
          includeIcon: true;
          icon: CardIconElement<Library>;
          iconPosition?: 'left' | 'right';
      }
    | {
          includeIcon?: false;
          icon?: null;
          iconPosition?: null;
      }
);

/**
 * A pair of title and description
 */
export type TitleDescriptionPair = {
    title: CardTextItem;
    description: CardTextItem;
};
