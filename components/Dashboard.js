import React from 'react'
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Header } from "./DrawerNavigation";
import { gStyle } from '../style'

export default function Dashboard({ navigation }) {
  return (
    <ScrollView vertical={true}>
      <Header navigation={navigation} />
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Лента</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
})
