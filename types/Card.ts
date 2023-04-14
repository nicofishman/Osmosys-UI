import { MultipleDataProps, SingleDataProps } from '../src/components/Card';

export type CardSingleDataElement = React.ReactElement<SingleDataProps> & {
    type: React.JSXElementConstructor<SingleDataProps>;
};

export type CardMultipleDataElement = React.ReactElement<MultipleDataProps> & {
    type: React.JSXElementConstructor<MultipleDataProps>;
};

export type CardElement = CardSingleDataElement | CardMultipleDataElement;
