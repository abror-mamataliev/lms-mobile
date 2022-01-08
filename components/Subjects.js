import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { gStyle } from '../styles/style'
import { subjectStyle } from '../styles/subject'
import { SubjectModel } from '../database/subjects'

function SubjectElements(subject, key) {
  return (
    <DataTable.Row key={key}>
      <View style={subjectStyle.tableRow}>
        <View style={subjectStyle.tableRowElements}>
          <View>
            <Text style={{textAlign: "left", fontFamily: "os-bold"}}>Дисциплина</Text>
          </View>
          <View>
            <Text style={{textAlign: "right", fontFamily: "os-regular"}}>{subject.name}</Text>
          </View>
        </View>
        <View style={subjectStyle.tableRowElements}>
          <Text style={{textAlign: "left", fontFamily: "os-bold"}}>Преподаватель</Text>
          <Text style={{textAlign: "right", fontFamily: "os-regular"}}>{subject.teacher}</Text>
        </View>
      </View>
    </DataTable.Row>
  )
}

export default function Subjects() {

  const [subjects, setSubjects] = useState(SubjectModel)

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Мои предметы</Text>
      <View style={subjectStyle.mainContainer}>
        <DataTable>
          {/* <DataTable.Header>
            <DataTable.Title>Дисциплина</DataTable.Title>
            <DataTable.Title>Преподаватель</DataTable.Title>
            <DataTable.Title>Кол-во НБ</DataTable.Title>
            <DataTable.Title>Действие</DataTable.Title>
          </DataTable.Header> */}
          {
            subjects.map((subject) => {
              return SubjectElements(subject, Math.random().toString(36).substr(2, 9))
            })
          }
        </DataTable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
})
