import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StudentHomePage from "../screens/Student/Home";
import StudentNotify from "../screens/Student/Notification";
import StudentSearch from "../screens/Student/Search";
import StudentUtilities from "../screens/Student/Utilities";
import StudentProfile from "../screens/Student/Profile";
import ProfessorHomePage from "../screens/Professor/Home";
import ProfessorNotify from "../screens/Professor/Notification";
import ShowMore from "../screens/Professor/ShowMore";
import WeeklyCalendar from "../screens/Professor/WeeklyCalendar";
import Work from "../screens/Professor/Work";
import Login from "../screens/Account/Login";
import Selection from "../screens/Account/Selection";
import SignUp from "../screens/Account/SignUp";
import StudentRoot from "../screens/Student/Root";
import ProfessorRoot from "../screens/Professor/Root";

export const NAME_SCREEN = {
  StudentHomePage: "StudentHomePage",
  StudentNotify: "StudentNotify",
  StudentSearch: "StudentSearch",
  StudentUtilities: "StudentUtilities",
  StudentProfile: "StudentProfile",
  ProfessorHomePage: "ProfessorHomePage",
  ProfessorNotify: "ProfessorNotify",
  ShowMore: "ShowMore",
  WeeklyCalendar: "WeeklyCalendar",
  Work: "Work",
  Login: "Login",
  Selection: "Selection",
  SignUp: "SignUp",
  StudentRoot: "StudentRoot",
  ProfessorRoot: "ProfessorRoot",
};

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 0 },
        cardOverlayEnabled: true,
        headerBackTitle: null,
        headerTitleAlign: "center",
        headerTruncatedBackTitle: null,
        headerShown: false,
      }}
      initialRouteName={NAME_SCREEN.Selection}
    >
      <Stack.Screen
        name={NAME_SCREEN.Work}
        component={Work}
      />
      <Stack.Screen
        name={NAME_SCREEN.ProfessorNotify}
        component={ProfessorNotify}
      />
      <Stack.Screen
        name={NAME_SCREEN.ProfessorHomePage}
        component={ProfessorHomePage}
      />
      <Stack.Screen
        name={NAME_SCREEN.WeeklyCalendar}
        component={WeeklyCalendar}
      />
      <Stack.Screen
        name={NAME_SCREEN.ShowMore}
        component={ShowMore}
      />
      <Stack.Screen
        name={NAME_SCREEN.StudentProfile}
        component={StudentProfile}
      />
      <Stack.Screen
        name={NAME_SCREEN.StudentNotify}
        component={StudentNotify}
      />
      <Stack.Screen
        name={NAME_SCREEN.StudentHomePage}
        component={StudentHomePage}
      />
      <Stack.Screen
        name={NAME_SCREEN.StudentUtilities}
        component={StudentUtilities}
      />
      <Stack.Screen
        name={NAME_SCREEN.StudentSearch}
        component={StudentSearch}
      />
      <Stack.Screen name={NAME_SCREEN.Login} component={Login} />
      <Stack.Screen name={NAME_SCREEN.SignUp} component={SignUp} />
      <Stack.Screen name={NAME_SCREEN.Selection} component={Selection} />
      <Stack.Screen
        name={NAME_SCREEN.ProfessorRoot}
        component={ProfessorRoot}
      />
      <Stack.Screen name={NAME_SCREEN.StudentRoot} component={StudentRoot} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
