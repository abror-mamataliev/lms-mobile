import React from 'react'
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MyHeader } from "../header";
import { gStyle } from '../styles/style'

export default function Dashboard({ navigation }) {
  return (
    <ScrollView vertical={true}>
      <MyHeader navigation={navigation} />
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Лента</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
})
