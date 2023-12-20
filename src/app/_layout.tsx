import "@/libs/dayjs";

import { useEffect } from "react";
import { StatusBar } from "react-native";
import { SplashScreen, Stack, router } from "expo-router";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

import { Loading } from "@/components/Loading";

import { CityProvider } from "@/contexts/CityContext";
import { colors } from "@/constants/Colors";
import { useCity } from "@/hooks/useCity";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Loading size="large" />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { city } = useCity();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    router.push("/dashboard");
  }, [city]);

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: colors.gray[900],
      }}
    >
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <SafeAreaView style={{ flex: 1 }}>
        <CityProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </CityProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
