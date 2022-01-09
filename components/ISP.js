import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "./DrawerNavigation";
import { appStyle, ispStyle, textBold, textRegular } from "../style";

function SubjectElements(subject, key) {
  return (
    <View key={key} style={ispStyle.flex}>
      <View style={ispStyle.tableRow}>
        <View style={ispStyle.tableRowElement5}>
          <Text style={textRegular}>{subject.name}</Text>
        </View>
        <View style={ispStyle.tableRowElement2}>
          <Text style={ispStyle.tableRowElementRightRegular}>
            {subject.credit}
          </Text>
        </View>
        <View style={ispStyle.tableRowElement2}>
          <Text style={ispStyle.tableRowElementRightRegular}>
            {subject.mark != 0 ? subject.mark : ""}
          </Text>
        </View>
      </View>
      <View style={ispStyle.hr1}></View>
    </View>
  );
}

function TermElements(term, key) {
  return (
    <View key={key} style={appStyle.mainContainer}>
      <Text style={{ fontFamily: "os-regular", fontSize: 20 }}>
        {term.term}
      </Text>
      <View style={ispStyle.table}>
        <View style={ispStyle.tableRow}>
          <View style={ispStyle.tableRowElement5}>
            <Text style={textBold}>Дисциплина</Text>
          </View>
          <View style={ispStyle.tableRowElement2}>
            <Text style={ispStyle.tableRowElementRightBold}>Кредит</Text>
          </View>
          <View style={ispStyle.tableRowElement2}>
            <Text style={ispStyle.tableRowElementRightBold}>Оценка</Text>
          </View>
        </View>
        <View style={ispStyle.hr2}></View>
        {term.subjects.map((subject, index) => {
          return SubjectElements(subject, index);
        })}
      </View>
    </View>
  );
}

export default function ISP({ navigation }) {
  const [isp, setIsp] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      try {
        const result = await AsyncStorage.getItem("isp");
        const data = result != null ? JSON.parse(result) : null;
        setIsp(data);
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
          <Text style={appStyle.title}>Индивидуальный учебный план</Text>
          {isp
            ? isp.map((term, index) => {
                return TermElements(term, index);
              })
            : null}
        </View>
      </ScrollView>
    </View>
  );
}
