import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../screens/WelcomePage";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import FriendsActivities from "../screens/FriendsActivities";
import profile from "../components/Profile";
import AppointmentSchedule from "../screens/AppointmentSchedule";
import Record from "../screens/Record";
import EmergencySvreen from "../screens/EmergencySvreen";
import HealthCheckup from "../screens/HealthCheckup";
import Medicines from "../screens/Medicines";
import Profile1 from "../screens/Profile1";
import MedicalCourses from "../screens/MedicalCourses";
import login from "../screens/login";
import CardiologyInformation from "../screens/CardiologyInformation";
import DentistInfo from "../screens/DentistInfo";
import NeuroHealth from "../screens/NeuroHealth";
import OrthopedicClinicLocator from "../screens/OrthopedicClinicLocator";
import VaccinationInformation from "../screens/VaccinationInformation";
// import VideoCall from "../screens/VideoCall";
//import ChatBot from "../screens/Chatbot";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomePage"
        component={WelcomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        
      />
      <Stack.Screen
        name="Home"
        component={Home}
        
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
      <Stack.Screen 
          name="login"
          component={login}
          
       />
      <Stack.Screen
        name="Profile"
        component={profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VaccinationInformation"
        component={VaccinationInformation}
        options={{ headerShown: false }}
      /><Stack.Screen
        name="DentistInfo"
        component={DentistInfo}
        options={{ headerShown: false }}
      /><Stack.Screen
        name="CardiologyInformation"
        component={CardiologyInformation}
        options={{ headerShown: false }}
      /><Stack.Screen
        name="OrthopedicClinicLocator"
        component={OrthopedicClinicLocator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NeuroHealth"
        component={NeuroHealth}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="VideoCall"
        component={VideoCall}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
