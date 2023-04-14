import { select } from '@storybook/addon-knobs';
import { View, StyleSheet } from 'react-native';

import { COLORS } from '../../../src/constants';

interface BoxProps {
    /**
     * The content of the component.
     */
    children: React.ReactNode;
    /**
     * The test ID of the component.
     */
    testId?: string;
    /**
     * The background color of the component. This should be a key of the `COLORS` object.
     */
    backgroundColor?: keyof typeof COLORS | null;
}

export default function Box({
    children,
    testId,
    backgroundColor = null
}: BoxProps) {
    const background = backgroundColor
        ? COLORS[backgroundColor]
        : select<keyof typeof COLORS>(
              'BackgroundColor',
              COLORS,
              'primary_orange'
          );

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: background
                }
            ]}
            testID={testId}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 16,
        paddingVertical: 14,
        shadowColor: '#000000',
        elevation: 10
    }
});
