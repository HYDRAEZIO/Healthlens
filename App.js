import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MyStack from "./navigation/Index";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "SourceSansPro":require("./assets/fonts/SourceSansPro-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
       
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
};
export default App;
