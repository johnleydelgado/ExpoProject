import {
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from '@expo-google-fonts/merriweather';
import { useFonts } from 'expo-font';
import { extendTheme, NativeBaseProvider } from 'native-base';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { MainNavigator } from './src/navigators';
import { store } from './src/redux/configureStore';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};

const fontTheme = {
  fontConfig: {
    WorkSans: {
      100: {
        normal: 'Merriweather_300Light',
        italic: 'Merriweather_300Light_Italic',
      },
      200: {
        normal: 'Merriweather_300Light',
        italic: 'Merriweather_300Light_Italic',
      },
      300: {
        normal: 'Merriweather_300Light',
        italic: 'Merriweather_300Light_Italic',
      },
      400: {
        normal: 'Merriweather_400Regular',
      },
      500: {
        normal: 'Merriweather_400Regular',
      },
      600: {
        normal: 'Merriweather_400Regular',
      },
      700: {
        normal: 'Merriweather_700Bold',
      },
    },
  },
  fonts: {
    heading: 'WorkSans',
    body: 'WorkSans',
    mono: 'WorkSans',
  },
};

const theme = extendTheme({ colors: newColorTheme, fontTheme });

export default function App() {
  const [loaded] = useFonts({
    Merriweather_300Light,
    Merriweather_300Light_Italic,
    Merriweather_400Regular,
    Merriweather_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <MainNavigator />
        <Toast />
      </NativeBaseProvider>
    </Provider>
  );
}
