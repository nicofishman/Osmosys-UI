import { IButton } from '../src/components/Button';

export type ButtonElement = React.ReactElement<IButton> & {
    type: React.JSXElementConstructor<IButton>;
};
