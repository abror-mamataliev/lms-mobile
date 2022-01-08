import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DataTable } from "react-native-paper"
import { MyHeader } from "../header";
import { gStyle } from '../styles/style'
import { ispStyle } from '../styles/isp'
import { ISPModel } from '../database/isp'

function SubjectElements(subject) {
  return (
    <DataTable.Row>
      <DataTable.Cell
        style={{
          flex: 3
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text style={{ fontFamily: "os-regular", flex: 1 }}>
            {subject.name}
          </Text>
        </View>
      </DataTable.Cell>
      <DataTable.Cell
        numeric
        style={{
          flex: 1,
        }}
      >
        <Text style={{ fontFamily: "os-regular" }}>{subject.credit}</Text>
      </DataTable.Cell>
      <DataTable.Cell
        numeric
        style={{
          flex: 1,
        }}
      >
        <Text style={{ fontFamily: "os-regular" }}>
          {subject.mark != 0 ? subject.mark : ""}
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
  );
}

function TermElements(term) {
  return (
    <View style={gStyle.mainContainer}>
      <Text style={{ fontFamily: "os-regular", fontSize: 20 }}>{term.term}</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Cell
            style={{
              flex: 3,
            }}
          >
            <Text style={{ fontFamily: "os-regular" }}>Дисциплина</Text>
          </DataTable.Cell>
          <DataTable.Cell
            numeric
            style={{
              flex: 1,
            }}
          >
            <Text style={{ fontFamily: "os-regular" }}>Кредит</Text>
          </DataTable.Cell>
          <DataTable.Cell
            numeric
            style={{
              flex: 1,
            }}
          >
            <Text style={{ fontFamily: "os-regular" }}>Оценка</Text>
          </DataTable.Cell>
        </DataTable.Header>
        {term.subjects.map((subject) => {
          return SubjectElements(subject);
        })}
      </DataTable>
    </View>
  );
}

export default function ISP({ navigation }) {
  const [isp, setIsp] = useState(ISPModel);

  return (
    <View>
      <MyHeader navigation={navigation} />
      <ScrollView vertical={true}>
        <View style={gStyle.main}>
          <Text style={gStyle.title}>Индивидуальный учебный план</Text>
          {isp.map((term) => {
            return TermElements(term);
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
})
