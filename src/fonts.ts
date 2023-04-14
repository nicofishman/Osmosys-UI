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
            Nunito_700Bold: require('@expo-google-fonts/nunito/Nunito_700Bold.ttf'),
            Montserrat_800ExtraBold: require('@expo-google-fonts/montserrat/Montserrat_800ExtraBold.ttf')
        });
    } catch (err) {
        console.log(err);
    } finally {
        SplashScreen.hideAsync();
        setFontsLoaded(true);
    }
};
