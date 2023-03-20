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
	.add('with text test', () => {
		return (
			<Box>
				<Title numberOfLines={1} ellipsizeMode='tail' color='white'>
					12345678910111213141516
				</Title>
				<Text color='gray'>12345678910111213141516171819202122</Text>
			</Box>
		);
	});
