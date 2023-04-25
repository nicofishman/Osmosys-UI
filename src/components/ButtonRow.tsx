import React, { Fragment } from 'react';
import { View, ViewProps } from 'react-native';

import { ButtonElement } from '../../types/Button';

import { Button, IButton } from './Button';

interface IButtonRow extends ViewProps {
    children:
        | ButtonElement
        | [ButtonElement]
        | [ButtonElement, ButtonElement]
        | [ButtonElement, ButtonElement, ButtonElement];
}

export const ButtonRow = ({ children, style, ...rest }: IButtonRow) => {
    const buttonCount = Array.isArray(children) ? children.length : 1;

    if (Array.isArray(children)) {
        if (children.length > 3) {
            throw new Error('ButtonRow can only contain 3 Button components');
        }
        children.forEach((butt) => {
            if (butt.type !== Button) {
                throw new Error('ButtonRow can only contain Button components');
            }
        });
    } else if (children.type !== Button) {
        throw new Error('ButtonRow can only contain Button components');
    } else {
        children = [children];
    }

    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingHorizontal: 10
                },
                style,
                {
                    gap: 15,
                    columnGap: 15
                }
            ]}
            {...rest}
        >
            {children.map((child, idx) => {
                return (
                    <Fragment key={idx}>
                        {React.cloneElement(child, {
                            size:
                                buttonCount === 1
                                    ? 'lg'
                                    : buttonCount === 2
                                    ? 'md'
                                    : 'sm'
                        } as Partial<IButton>)}
                    </Fragment>
                );
            })}
        </View>
    );
};
