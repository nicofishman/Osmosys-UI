import React from 'react';
import { TouchableHighlight } from 'react-native';

interface ButtonProps {
	children: React.ReactNode;
	onPress?: () => void;
}

export default function Button({
	onPress = () => {},
	children = null,
}: ButtonProps) {
	return (
		<TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
	);
}
