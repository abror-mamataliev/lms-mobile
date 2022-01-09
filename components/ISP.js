import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DataTable } from "react-native-paper"
import { MyHeader } from "../header";
import { gStyle } from '../styles/style'
import { ispStyle } from '../styles/isp'
import { ISPModel } from '../database/isp'

function SubjectElements(subject, key) {
  return (
    <View
      key={key}
      style={{
        display: "flex",
      }}
    >
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text style={{ fontFamily: "os-regular" }}>{subject.name}</Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{ fontFamily: "os-regular", flex: 1, textAlign: "right" }}
          >
            {subject.credit}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{ fontFamily: "os-regular", flex: 1, textAlign: "right" }}
          >
            {subject.mark != 0 ? subject.mark : ""}
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#e7e8eb",
          borderBottomWidth: 1,
        }}
      ></View>
    </View>
  );
}

function TermElements(term, key) {
  return (
    <View key={key} style={gStyle.mainContainer}>
      <Text style={{ fontFamily: "os-regular", fontSize: 20 }}>
        {term.term}
      </Text>
      <View
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
            margin: 10,
          }}
        >
          <View
            style={{
              flex: 5,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text style={{ fontFamily: "os-regular" }}>Дисциплина</Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{ fontFamily: "os-regular", flex: 1, textAlign: "right" }}
            >
              Кредит
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{ fontFamily: "os-regular", flex: 1, textAlign: "right" }}
            >
              Оценка
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#dfe2e6",
            borderBottomWidth: 2,
          }}
        ></View>
        {term.subjects.map((subject, index) => {
          return SubjectElements(subject, index);
        })}
      </View>
    </View>
  );
}

export default function ISP({ navigation }) {
  const [isp, setIsp] = useState(ISPModel);

  return (
    <View>
      <MyHeader navigation={navigation} />
      <ScrollView vertical={true} style={{ marginBottom: 80 }}>
        <View style={gStyle.main}>
          <Text style={gStyle.title}>Индивидуальный учебный план</Text>
          {isp.map((term, index) => {
            return TermElements(term, index);
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
})
