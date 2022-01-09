import React, { useState } from 'react'
import { Image, Text, View } from "react-native";
import AppLoading from 'expo-app-loading'
import { fonts } from './fonts'
import { Sidebar } from "./components/DrawerNavigation";
import Dashboard from './components/Dashboard'
import Subjects from './components/Subjects'
import Schedule from './components/Schedule'
import ISP from './components/ISP'
import Information from './components/Information'

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

// function MainStack() {
//   return (
//       <Stack.Navigator>
//         <Stack.Screen name="Main" component={Main} options={{
//           headerShown: false
//         }} />
//         <Stack.Screen name="FullInfo" component={FullInfo} options={{
//           headerShown: false
//         }} />
//       </Stack.Navigator>
//   )
// }

function DrawerScreenHeaderOptions(title) {
  return {
    drawerItemStyle: {
      color: "#fff"
    },
    title: title,
    headerStyle: {
      backgroundColor: '#262859',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: "os-regular"
    }
  }
}

export default function Navigate() {
  const [font, setFont] = useState(false)
  if (font) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <Sidebar {...props} />}
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: "#262859",
            },
            drawerLabelStyle: {
              color: "#fff",
            },
          }}
        >
          <Drawer.Screen
            name="Лента"
            component={Dashboard}
          />
          <Drawer.Screen
            name="Мои предметы"
            component={Subjects}
          />
          <Drawer.Screen
            name="Расписание"
            component={Schedule}
          />
          <Drawer.Screen
            name="Индивидуальный учебный план"
            component={ISP}
          />
          <Drawer.Screen
            name="Информация"
            component={Information}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    )
  }
}
