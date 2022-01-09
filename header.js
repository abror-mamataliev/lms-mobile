import React from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native";
import { gStyle } from './styles/style'

export const MyHeader = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer()
  }
  return (
    <View style={gStyle.header}>
      <TouchableOpacity onPress={openMenu}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("./assets/logo.png")}
        />
      </TouchableOpacity>
    </View>
  )
}