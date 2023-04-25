import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

/**
 * Loads the fonts for the app
 * @param setFontsLoaded - A function that sets the fontsLoaded's react state to true
 */
export const loadFonts = async (
    setFontsLoaded: React.Dispatch<React.SetStateAction<boolean>>
) => {
    try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
            Nunito_400Regular: require('@expo-google-fonts/nunito/Nunito_400Regular.ttf'),
            Nunito_500Medium: require('@expo-google-fonts/nunito/Nunito_500Medium.ttf'),
            Nunito_600SemiBold: require('@expo-google-fonts/nunito/Nunito_600SemiBold.ttf'),
            Nunito_700Bold: require('@expo-google-fonts/nunito/Nunito_700Bold.ttf'),
            Nunito_800ExtraBold: require('@expo-google-fonts/nunito/Nunito_800ExtraBold.ttf'),
            Montserrat_400Regular: require('@expo-google-fonts/montserrat/Montserrat_400Regular.ttf'),
            Montserrat_500Medium: require('@expo-google-fonts/montserrat/Montserrat_500Medium.ttf'),
            Montserrat_600SemiBold: require('@expo-google-fonts/montserrat/Montserrat_600SemiBold.ttf'),
            Montserrat_700Bold: require('@expo-google-fonts/montserrat/Montserrat_700Bold.ttf'),
            Montserrat_800ExtraBold: require('@expo-google-fonts/montserrat/Montserrat_800ExtraBold.ttf')
        });
    } catch (err) {
        console.log(err);
    } finally {
        SplashScreen.hideAsync();
        setFontsLoaded(true);
    }
};
