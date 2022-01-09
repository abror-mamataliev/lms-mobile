import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Table, Row } from "react-native-table-component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "./DrawerNavigation";
import { appStyle, scheduleStyle } from "../style";

export default function Schedule({ navigation }) {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const dataLoad = async () => {
      try {
        const result = await AsyncStorage.getItem("schedule");
        const data = result != null ? JSON.parse(result) : null;
        setSchedule(data);
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
          <Text style={appStyle.title}>Расписание</Text>
          <View style={appStyle.mainContainer}>
            <ScrollView horizontal={true}>
              <Table borderStyle={{ borderWidth: 1 }}>
                <Row
                  data={schedule.head ? schedule.head : null}
                  widthArr={[150, 250, 250, 250, 250, 250, 250]}
                  height={70}
                  textStyle={scheduleStyle.tableHeadTextStyle}
                />
                {schedule.data
                  ? schedule.data.map((time, index) => {
                      return (
                        <Row
                          key={index}
                          data={time}
                          widthArr={[150, 250, 250, 250, 250, 250, 250]}
                          height={100}
                          textStyle={scheduleStyle.tableTextStyle}
                        />
                      );
                    })
                  : []}
              </Table>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
