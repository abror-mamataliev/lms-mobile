import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "./DrawerNavigation";
import { appStyle, infoStyle, textBold } from "../style";

function InformationElements(info, key) {
  return (
    <View key={key} style={infoStyle.element}>
      <View style={infoStyle.elementRow}>
        <View style={infoStyle.elementRowKey}>
          <Text style={textBold}>{info.key}</Text>
        </View>
        <View style={infoStyle.elementRowValue}>
          <Text style={infoStyle.elementRowValueRightRegular}>
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
        const data = result != null ? JSON.parse(result) : null;
        setInformation(data);
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
        <View style={appStyle.main}>
          <Text style={appStyle.title}>Информация</Text>
          <View style={appStyle.mainContainer}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={infoStyle.image}
                source={require("../assets/avatar.jpg")}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              {information.person
                ? information.person.map((info, index) => {
                    return InformationElements(info, index);
                  })
                : null}
            </View>
          </View>
          <View style={appStyle.mainContainer}>
            <View style={{ marginVertical: 10 }}>
              {information.student
                ? information.student.map((info, index) => {
                    return InformationElements(info, index);
                  })
                : null}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
