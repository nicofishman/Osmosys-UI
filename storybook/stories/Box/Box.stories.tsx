import { storiesOf } from '@storybook/react-native';
import { select } from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import { Title, Text } from '../Text/index';
import { COLORS } from '../../../src/constants';

import Box from '.';

storiesOf('Box', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .addParameters({
        knobs: {
            background: select<keyof typeof COLORS>(
                'Background Color',
                COLORS,
                'primary_orange'
            )
        }
    })
    .add('with text test', () => {
        return (
            <Box>
                <Title color='white' ellipsizeMode='tail' numberOfLines={1}>
                    12345678910111213141516
                </Title>
                <Text color='gray'>12345678910111213141516171819202122</Text>
            </Box>
        );
    });
