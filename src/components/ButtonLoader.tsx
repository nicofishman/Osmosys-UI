import React from 'react';

import LoadingDots, { ILoadingDots } from '../lib/LoadingDots';
import { COLORS } from '../constants';

const ButtonLoader = (props: ILoadingDots) => {
    return (
        <LoadingDots
            bounceHeight={5}
            colors={[
                COLORS['primary_blue'],
                COLORS['primary_orange'],
                COLORS['primary_gray']
            ]}
            dots={3}
            size={10}
            {...props}
        />
    );
};

export default ButtonLoader;
