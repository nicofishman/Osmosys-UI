import { IMultipleData, ISingleData } from '../src/components/Card';

export type CardSingleDataElement = React.ReactElement<ISingleData> & {
    type: React.JSXElementConstructor<ISingleData>;
};

export type CardMultipleDataElement = React.ReactElement<IMultipleData> & {
    type: React.JSXElementConstructor<IMultipleData>;
};

export type CardElement = CardSingleDataElement | CardMultipleDataElement;
