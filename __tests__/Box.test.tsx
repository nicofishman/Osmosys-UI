import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { describe, expect, test } from '@jest/globals';
import Box from '../storybook/stories/Box';
import { Text, Title } from '../storybook/stories/Text';

describe('Box', () => {
	test('has 1 child', () => {
		const tree = renderer
			.create(
				<Box>
					<Text>Hola holahola</Text>
				</Box>
			)
			.toJSON();

		// @ts-ignore
		expect(tree?.children.length).toBe(1);
	});
	test('Background color matches with the expected', () => {
		const textToRender = Math.random().toString(36).substring(7);

		const tree = renderer.create(
			<Box backgroundColor={'primary_blue'}>
				<Text>{textToRender}</Text>
				<Text>{textToRender}</Text>
			</Box>
		);

		// @ts-ignore
		const bgColor = tree.toTree()?.rendered?.props.style[1].backgroundColor;

		//expect the length of the box not to exceed the length of device width
		const boxWidth = +tree
			.toTree()
			//@ts-ignore
			?.rendered?.props.style[0].width.replace('%', '');
		expect(boxWidth).toBeLessThanOrEqual(100);

		expect(bgColor).toBe('#2ab6c8');
	});
	test('Box does not exceed the device width', () => {
		const textToRender = Math.random().toString(36).substring(7);

		const { getByTestId } = render(
			<Box testId='BoxId' backgroundColor={'primary_blue'}>
				<Title>{textToRender}</Title>
				<Text>{textToRender}</Text>
			</Box>
		);
		const component = getByTestId('BoxId');

		console.log(component.props.style);

		expect(component.props.style.width).toBe(textToRender.length * 10);
	});
});
