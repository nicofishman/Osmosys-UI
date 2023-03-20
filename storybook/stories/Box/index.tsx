import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../src/constants';
import { select } from '@storybook/addon-knobs';

interface Props {
	children: React.ReactNode;
	testId?: string;
	backgroundColor?: keyof typeof COLORS | null;
}

export default function Box({
	children,
	testId,
	backgroundColor = null,
}: Props) {
	const background = backgroundColor
		? COLORS[backgroundColor]
		: select<keyof typeof COLORS>(
				'BackgroundColor',
				COLORS,
				'primary_orange'
		  );

	return (
		<View
			testID={testId}
			style={[
				styles.container,
				{
					backgroundColor: background,
				},
			]}>
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
		elevation: 10,
	},
});
