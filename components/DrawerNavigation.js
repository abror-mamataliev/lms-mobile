import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons"; 

export const Header = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View
      style={{
        padding: 10,
        paddingTop: 35,
        backgroundColor: "#ececf1",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={openMenu}>
        <Entypo name="menu" size={40} color="black" />
      </TouchableOpacity>
      <Image
        style={{
          width: 40,
          height: 40,
        }}
        source={require("../assets/avatar.jpg")}
      />
    </View>
  );
};

export const Sidebar = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ marginTop: 50 }}
          source={require("../assets/logo.png")}
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
          marginBottom: 20,
        }}
      >
        LMS TUIT
      </Text>
    </SafeAreaView>
  );
};
