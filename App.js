const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import WelcomePage from "./screens/WelcomePage";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import FriendsActivities from "./screens/FriendsActivities";
import Profile from "./components/Profile";
import AppointmentSchedule from "./screens/AppointmentSchedule";
import Record from "./screens/Record";
import EmergencySvreen from "./screens/EmergencySvreen";
import HealthCheckup from "./screens/HealthCheckup";
import Medicines from "./screens/Medicines";
import Profile1 from "./screens/Profile1";
import MedicalCourses from "./screens/MedicalCourses";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendsActivities"
              component={FriendsActivities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppointmentSchedule"
              component={AppointmentSchedule}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Record"
              component={Record}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencySvreen"
              component={EmergencySvreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HealthCheckup"
              component={HealthCheckup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Medicines"
              component={Medicines}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MedicalCourses"
              component={MedicalCourses}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
