import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter_Regular: require('../assets/fonts/Inter_24pt-Regular.ttf'),
    Inter_Bold: require('../assets/fonts/Inter_24pt-Bold.ttf'),
    Inter_Medium: require('../assets/fonts/Inter_24pt-Medium.ttf'),
    Inter_SemiBold: require('../assets/fonts/Inter_24pt-SemiBold.ttf'),
    Inter_Light: require('../assets/fonts/Inter_24pt-Light.ttf'),
    Inter_ExtraLight: require('../assets/fonts/Inter_24pt-ExtraLight.ttf'),
    Inter_Thin: require('../assets/fonts/Inter_24pt-Thin.ttf'),
    Inter_Black: require('../assets/fonts/Inter_24pt-Black.ttf'),
    Inter_ExtraBold: require('../assets/fonts/Inter_24pt-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* <StatusBar style="auto" /> */}
    </ThemeProvider>
  );
}
