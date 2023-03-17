import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from '@jest/globals';
import Button from '../storybook/stories/Button';
import { Text } from '../storybook/stories/Text';

describe('Button', () => {
	it('has 1 child', () => {
		const tree = renderer
			.create(
				<Button>
					<Text>Hola holahola</Text>
				</Button>
			)
			.toJSON();

		// @ts-ignore
		expect(tree?.children.length).toBe(1);
	});
});
