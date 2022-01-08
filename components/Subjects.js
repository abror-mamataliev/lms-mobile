import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { gStyle } from '../styles/style'
import { subjectStyle } from '../styles/subject'

function SubjectElements(subject, key) {
  return (
    <DataTable.Row key={key}>
      <View>
        <View>
          <Text style={{textAlign: "left", fontFamily: "os-bold"}}>Дисциплина</Text>
          <Text style={{textAlign: "right", fontFamily: "os-regular"}}>{subject.name}</Text>
        </View>
      </View>
    </DataTable.Row>
  )
}

export default function Subjects() {

  const [subjects, setSubjects] = useState([
    {
      name: "Aaa"
    }
  ])

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
