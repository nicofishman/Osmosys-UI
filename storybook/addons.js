import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-jest';

module.exports = {
	stories: ['./stories/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-knobs',
		'@storybook/addon-jest',
	],
};
