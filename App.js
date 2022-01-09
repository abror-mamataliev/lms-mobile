import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import {
  SubjectModel,
  ISPModel,
  InformationModel,
  ScheduleModel,
} from "./database";
import { fonts } from "./fonts";
import MainStack from "./navigate";

export default function App() {
  const [font, setFont] = useState(false);

  useEffect(() => {
    const dataLoad = async (value1, value2, value3, value4) => {
      try {
        await AsyncStorage.setItem("subjects", JSON.stringify(value1));
        await AsyncStorage.setItem("isp", JSON.stringify(value2));
        await AsyncStorage.setItem("information", JSON.stringify(value3));
        await AsyncStorage.setItem("schedule", JSON.stringify(value4));
      } catch (e) {
        console.warn(e);
      }
    };
    dataLoad(SubjectModel, ISPModel, InformationModel, ScheduleModel);
  }, []);

  if (font) {
    return <MainStack />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}
