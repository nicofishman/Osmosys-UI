import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '.';
import { StyleSheet } from 'react-native';
import CenterView from '../CenterView';
import { COLORS, TEXT_COLORS } from '../../../src/constants';
import { Title } from '../Text';

storiesOf('Button', module)
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
		<Button onPress={action('clicked-text')}>
			<Title style={styles.text}>
				{text('Button text', 'Hello Button')}
			</Title>
		</Button>
	))
	.add('Ficha de seguridad', () => (
		<Button
			style={{
				paddingVertical: 10,
			}}
			onPress={action('clicked-emoji')}>
			<Title style={styles.text}>DESCARGAR FICHA</Title>
		</Button>
	));

const styles = StyleSheet.create({
	text: {
		textTransform: 'uppercase',
		fontFamily: 'Montserrat_800ExtraBold',
		fontSize: 20,
		color: TEXT_COLORS['white'],
	},
});
