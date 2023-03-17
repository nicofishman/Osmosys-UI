import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import { Title, Text } from '../Text/index';
import Box from '.';
import { select } from '@storybook/addon-knobs';
import { COLORS } from '../../../src/constants';

storiesOf('Box', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.addParameters({
		knobs: {
			background: select<keyof typeof COLORS>(
				'Background Color',
				COLORS,
				'primary_orange'
			),
		},
	})
	.add('with text test', () => (
		<Box>
			{/* <Title color='white'>Box</Title>
			<Text color='gray'>Box</Text> */}
		</Box>
	));
