import React, { useState, useEffect } from 'react'
import { Image, ScrollView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "./DrawerNavigation";
import { gStyle } from '../style'

function InformationElements(info, key) {
  return (
    <View
      key={key}
      style={{
        display: "flex",
        padding: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "os-bold",
            }}
          >
            {info.key}
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "os-regular",
              flex: 1,
              textAlign: "right",
            }}
          >
            {info.value}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function Information({ navigation }) {
  const [information, setInformation] = useState({});

  useEffect(() => {
    const dataLoad = async () => {
      try {
        const result = await AsyncStorage.getItem("information");
        const info = result != null ? JSON.parse(result) : null;
        setInformation(info);
      } catch (e) {
        console.warn(e);
      }
    };
    dataLoad();
  }, []);
  
  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView vertical={true} style={{ marginBottom: 80 }}>
        <View style={gStyle.main}>
          <Text style={gStyle.title}>Информация</Text>
          <View style={gStyle.mainContainer}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{
                  width: 250,
                  height: 250,
                  marginTop: 10,
                }}
                source={require("../assets/avatar.jpg")}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              {information.person ? information.person.map((info, index) => {
                return InformationElements(info, index);
              }) : null}
            </View>
          </View>
          <View style={gStyle.mainContainer}>
            <View style={{ marginVertical: 10 }}>
              {information.student ? information.student.map((info, index) => {
                return InformationElements(info, index);
              }) : null}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
