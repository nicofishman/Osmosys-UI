import { useFonts } from 'expo-font';
import React from 'react';
import { Text as ReactNativeText, StyleSheet, TextStyle } from 'react-native';
import { TEXT_COLORS } from '../../../src/constants';
import { select } from '@storybook/addon-knobs';

interface Props extends React.ComponentProps<typeof ReactNativeText> {
	children: React.ReactNode;
	color?: keyof typeof TEXT_COLORS;
}

export function Text({ children, color = 'white', ...props }: Props) {
	const textColor = select<keyof typeof TEXT_COLORS>(
		'TextColor',
		TEXT_COLORS,
		color
	);

	let Nunito_700Bold;

	if (process.env.NODE_ENV === 'test') {
		Nunito_700Bold = { uri: 'Nunito_700Bold' };
	} else {
		Nunito_700Bold = require('../../../__mocks__/@expo-google-fonts/nunito');
		const [fontsLoaded] = useFonts({
			Nunito_700Bold,
		});

		if (!fontsLoaded) {
			return <ReactNativeText>Loading...</ReactNativeText>;
		}
	}

	return (
		<ReactNativeText
			{...props}
			style={[
				props.style,
				textStyles.truncate,
				{
					fontFamily: 'Nunito_700Bold',
					fontSize: 20,
					color: textColor,
				},
			]}>
			{children}
		</ReactNativeText>
	);
}

export function Title({ children, color = 'white', ...props }: Props) {
	const textColor = select<keyof typeof TEXT_COLORS>(
		'TitleColor',
		TEXT_COLORS,
		color
	);

	let Montserrat_800ExtraBold;

	if (process.env.NODE_ENV === 'test') {
		Montserrat_800ExtraBold = { uri: 'Montserrat_800ExtraBold' };
	} else {
		Montserrat_800ExtraBold = require('../../../__mocks__/@expo-google-fonts/montserrat');
		const [fontsLoaded] = useFonts({
			Montserrat_800ExtraBold,
		});

		if (!fontsLoaded) {
			return <ReactNativeText>Loading...</ReactNativeText>;
		}
	}

	return (
		<ReactNativeText
			{...props}
			style={[
				{
					fontFamily: 'Montserrat_800ExtraBold',
					fontSize: 32,
					color: textColor,
				},
				textStyles.truncate,
				props.style,
			]}>
			{children}
		</ReactNativeText>
	);
}

// specify StyleSheet.create with generics to TextStyles

const textStyles = StyleSheet.create<{
	[key: string]: TextStyle;
}>({
	truncate: {
		maxWidth: '100%',
		overflow: 'hidden',
	},
});
