import * as Font from 'expo-font';
import { Dispatch, SetStateAction } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export const loadFonts = async (
    setFontsLoaded: Dispatch<SetStateAction<boolean>>
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
