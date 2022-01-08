import React, { useState } from 'react'
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faClone } from "@fortawesome/free-regular-svg-icons"
import { MyHeader } from "../header";
import { gStyle } from '../styles/style'
import { subjectStyle } from '../styles/subject'
import { SubjectModel } from '../database/subjects'

function SubjectElements(subject, key) {
  return (
    <View key={key} style={subjectStyle.tableRow}>
      <View style={subjectStyle.tableRowElements}>
        <View style={subjectStyle.tableRowElementsKey}>
          <Text style={subjectStyle.tableKeyText}>Дисциплина</Text>
        </View>
        <View style={subjectStyle.tableRowElementsValue}>
          <Text style={subjectStyle.tableValueText}>{subject.name}</Text>
        </View>
      </View>
      <View style={subjectStyle.tableRowElements}>
        <View style={subjectStyle.tableRowElementsKey}>
          <Text style={subjectStyle.tableKeyText}>Преподаватель</Text>
        </View>
        <View style={subjectStyle.tableRowElementsValue}>
          <Text style={subjectStyle.tableValueText}>{subject.teacher}</Text>
        </View>
      </View>
      <View style={subjectStyle.tableRowElements}>
        <View style={subjectStyle.tableButtonKey}>
          <Text style={subjectStyle.tableKeyText}>Кол-во НБ</Text>
        </View>
        <View style={subjectStyle.tableButtonValue}>
          {/* <View style={subjectStyle.tableButtonDiv}></View> */}
          <Text style={subjectStyle.tableButton}>{subject.absence_number}</Text>
        </View>
      </View>
      <View style={subjectStyle.tableRowElements}>
        <View style={subjectStyle.tableButtonKey}>
          <Text style={subjectStyle.tableKeyText}>Действие</Text>
        </View>
        <View style={subjectStyle.tableButtonValue2}>
          <Text style={subjectStyle.tableButton}>
            <FontAwesome name="clone" color="#1d2d5b" />
            {/* <FontAwesomeIcon icon={faClone} style={{ color: "#1d2d5b" }} /> */}
            <Text> Активности</Text>
          </Text>
        </View>
      </View>
      <View style={subjectStyle.hr}></View>
    </View>
  );
}

export default function Subjects({ navigation }) {
  const [subjects, setSubjects] = useState(SubjectModel);

  return (
    <ScrollView vertical={true}>
      <MyHeader navigation={navigation} />
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Мои предметы</Text>
        <View style={gStyle.mainContainer}>
          {subjects.map((subject) => {
            return SubjectElements(
              subject,
              Math.random().toString(36).substr(2, 9)
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
})
