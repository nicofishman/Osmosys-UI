import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { TEXT_COLORS } from '../../../src/constants';
import CenterView from '../CenterView';

import { Text, Title } from '.';

storiesOf('Text', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .addParameters({
        knobs: {
            color: select<keyof typeof TEXT_COLORS>(
                'TitleColor',
                TEXT_COLORS,
                'white'
            )
        }
    })
    .add('Title text', () => <Title color='white'>Text</Title>)
    .add('Text text', () => <Text color='white'>Text</Text>);
