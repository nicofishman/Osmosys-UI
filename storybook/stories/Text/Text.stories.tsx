import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { TEXT_COLORS } from '../../../src/constants';
import { Title, Text } from '.';
import CenterView from '../CenterView';

storiesOf('Text', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addParameters({
		knobs: {
			color: select<keyof typeof TEXT_COLORS>(
				'TitleColor',
				TEXT_COLORS,
				'white'
			),
		},
	})
	.add('Title text', () => <Title color='white'>Title</Title>)
	.add('Text text', () => <Text color='white'>Text</Text>);
