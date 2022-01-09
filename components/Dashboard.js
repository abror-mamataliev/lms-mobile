import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Header } from "./DrawerNavigation";
import { appStyle } from "../style";

export default function Dashboard({ navigation }) {
  return (
    <ScrollView vertical={true} style={{ zIndex: 0 }}>
      <Header navigation={navigation} />
      <View style={appStyle.main}>
        <Text style={appStyle.title}>Лента</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
