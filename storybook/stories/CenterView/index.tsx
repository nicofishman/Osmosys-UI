import React from 'react';
import { View } from 'react-native';
import style from './style';

interface Props {
	children: React.ReactNode;
}

export default function CenterView({ children }: Props) {
	return <View style={style.main}>{children}</View>;
}
