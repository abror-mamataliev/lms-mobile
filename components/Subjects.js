import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { Header, Dropdown } from "./DrawerNavigation";
import { appStyle, subjectStyle, textBold, textRegular } from "../style";

function SubjectElements(subject, key) {
  return (
    <View key={key} style={subjectStyle.table}>
      <View style={subjectStyle.tableRow}>
        <View style={subjectStyle.tableRowElement2}>
          <Text style={textBold}>Дисциплина</Text>
        </View>
        <View style={subjectStyle.tableRowElement3}>
          <Text style={subjectStyle.tableRowElementRightRegular}>
            {subject.name}
          </Text>
        </View>
      </View>
      <View style={subjectStyle.tableRow}>
        <View style={subjectStyle.tableRowElement2}>
          <Text style={textBold}>Преподаватель</Text>
        </View>
        <View style={subjectStyle.tableRowElement3}>
          <Text style={subjectStyle.tableRowElementRightRegular}>
            {subject.teacher}
          </Text>
        </View>
      </View>
      <View style={subjectStyle.tableRow}>
        <View style={subjectStyle.tableRowElement2}>
          <Text style={textBold}>Кол-во НБ</Text>
        </View>
        <View style={subjectStyle.tableRowElementReverse3}>
          <TouchableOpacity style={subjectStyle.button}>
            <Text style={textRegular}>{subject.absence_number}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={subjectStyle.tableRow}>
        <View style={subjectStyle.tableRowElement2}>
          <Text style={textBold}>Действие</Text>
        </View>
        <View style={subjectStyle.tableRowElementReverse3}>
          <TouchableOpacity style={subjectStyle.button}>
            <Text style={textRegular}>
              <FontAwesome name="clone" size={16} color="#1d2d5b" />
              <Text> Активности</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={subjectStyle.hr2}></View>
    </View>
  );
}

export default function Subjects({ navigation }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      try {
        const result = await AsyncStorage.getItem("subjects");
        const data = result != null ? JSON.parse(result) : null;
        setSubjects(data);
      } catch (e) {
        console.warn(e);
      }
    };
    dataLoad();
  }, []);

  return (
    <View>
      <Header navigation={navigation} />
      <Dropdown />
      <ScrollView vertical={true} style={{ marginBottom: 80 }}>
        <View style={appStyle.main}>
          <Text style={appStyle.title}>Мои предметы</Text>
          <View style={appStyle.mainContainer}>
            {subjects
              ? subjects.map((subject, index) => {
                  return SubjectElements(subject, index);
                })
              : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
