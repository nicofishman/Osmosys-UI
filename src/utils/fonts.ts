import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic
} from '@expo-google-fonts/nunito';

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
      Nunito_200ExtraLight,
      Nunito_300Light,
      Nunito_400Regular,
      Nunito_500Medium,
      Nunito_600SemiBold,
      Nunito_700Bold,
      Nunito_800ExtraBold,
      Nunito_900Black,
      Nunito_200ExtraLight_Italic,
      Nunito_300Light_Italic,
      Nunito_400Regular_Italic,
      Nunito_500Medium_Italic,
      Nunito_600SemiBold_Italic,
      Nunito_700Bold_Italic,
      Nunito_800ExtraBold_Italic,
      Nunito_900Black_Italic
    });
  } catch (err) {
    console.log(err);
  } finally {
    SplashScreen.hideAsync();
    setFontsLoaded(true);
  }
};
