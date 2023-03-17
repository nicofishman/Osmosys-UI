import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from '@jest/globals';
import Box from '../storybook/stories/Box';
import { Text } from '../storybook/stories/Text';

describe('Box', () => {
	it('has 1 child', () => {
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
	it('has 2 children', () => {
		const tree = renderer
			.create(
				<Box>
					<Text>Hola holahola</Text>
					<Text>Hola holahola</Text>
				</Box>
			)
			.toJSON();

		// @ts-ignore
		expect(tree?.children.length).toBe(2);
	});
});
