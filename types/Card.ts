import { ICard } from '../src/components/Card';

export type CardElement = React.ReactElement<ICard> & {
    type: React.JSXElementConstructor<ICard>;
};
