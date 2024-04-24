import * as Font from "expo-font";
import { useState, useEffect } from "react";
import MainStack from "./navigate";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
          "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  

  if (!fontLoaded) {
    return null;
  }

  return (
      <MainStack />
  );
}
