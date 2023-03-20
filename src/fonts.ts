import * as Font from 'expo-font';

export const loadFonts = async () => {
	return Font.loadAsync({
		Nunito_700Bold: require('@expo-google-fonts/nunito/Nunito_700Bold.ttf'),
		Montserrat_800ExtraBold: require('@expo-google-fonts/montserrat/Montserrat_800ExtraBold.ttf'),
	});
};
