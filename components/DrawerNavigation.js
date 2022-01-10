import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux"
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
import { ShowDr } from '../redux/actions/Action'
// import reducer from '../redux/reducer'

var stateDropdown = false

export const Header = ({ navigation }) => {
  const dispatch = useDispatch();
  const dataDropdown = useSelector((state) => state);
  // const [state, dispatch] = useReducer(reducer);
  const openMenu = () => {
    navigation.openDrawer();
  };
  const openDropdown = () => {
    dataDropdown.show.showDropdown === false
      ? dispatch(ShowDr(true))
      : dispatch(ShowDr(false));
    // dispatch({type: "show"})
    // stateDropdown = state.show;
  };
  // console.log(state);
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
      <TouchableOpacity onPress={openDropdown}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={require("../assets/avatar.jpg")}
        />
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

export function Dropdown() {
  const dataDropdown = useSelector((state) => state);
  console.log(dataDropdown.show.showDropdown);
  return (
    <>
      {dataDropdown.show.showDropdown ? (
        <View
          style={{
            position: "absolute",
            top: 80,
            right: 10,
            zIndex: 1000, // works on ios
            elevation: 1000, // works on android
            backgroundColor: "#ffffff",
          }}
        >
          <TouchableOpacity style={{ padding: 15 }}>
            <Text>Настройки</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 15 }}>
            <Text>Выход</Text>
          </TouchableOpacity>
        </View>
       ) : null} 
    </>
  );
};

