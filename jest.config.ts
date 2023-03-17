import { defaults as tsjPreset } from 'ts-jest/presets';
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
	...tsjPreset,
	preset: 'react-native',
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.spec.json',
			},
		],
	},
	transformIgnorePatterns: [
		// prettier-ignore
		'node_modules\/(?!(@expo-google-fonts|expo-.*|@react-native|react-native)\/)',
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default jestConfig;
