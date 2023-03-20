// if you use expo remove this line
import { AppRegistry, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import {
	getStorybookUI,
	configure,
	addDecorator,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { loadFonts } from '../src/fonts';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
	loadFonts();
	require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
	asyncStorage: null,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default () => (
	<SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
		<StorybookUIRoot />
	</SafeAreaView>
);
