import React from "react"
import {
  SafeAreaView,
  View,
  Image,
  Text
} from "react-native"

import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer"

export const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{marginTop: 35}}
          source={require("./assets/logo.png")}
      />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "grey",
          marginBottom: 20
        }}
      >
        LMS TUIT
      </Text>
    </SafeAreaView>
  )
}
