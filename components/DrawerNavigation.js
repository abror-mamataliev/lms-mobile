import React, { useState } from "react";
import {
  Image,
  Picker,
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
  const [dropdown, setDropdown] = useState("none")
  const [selectedValue, setSelectedValue] = useState("java");
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
      <TouchableOpacity onPress={openMenu}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={require("../assets/avatar.jpg")}
        />
        {/* <View
          style={{
            position: "absolute",
            backgroundColor: "#ff0000",
            marginTop: 20,
            marginRight: 0,
            marginLeft: -110,
            zIndex: 3, // works on ios
            elevation: 3, // works on android
          }}
        >
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View> */}
      </TouchableOpacity>
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
          fontFamily: "os-regular",
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
