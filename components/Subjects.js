import React, { useState } from 'react'
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faClone } from "@fortawesome/free-regular-svg-icons"
import { MyHeader } from "../header";
import { gStyle } from '../styles/style'
import { subjectStyle } from '../styles/subject'
import { SubjectModel } from '../database/subjects'

function SubjectElements(subject, key) {
  return (
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
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "os-bold",
            }}
          >
            Дисциплина
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "os-regular",
              flex: 1,
              textAlign: "right",
            }}
          >
            {subject.name}
          </Text>
        </View>
      </View>
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
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "os-bold",
            }}
          >
            Преподаватель
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "os-regular",
              flex: 1,
              textAlign: "right",
            }}
          >
            {subject.teacher}
          </Text>
        </View>
      </View>
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
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "os-bold",
            }}
          >
            Кол-во НБ
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row-reverse",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 5,
              borderColor: "#1d2d5b",
              borderRadius: 5,
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "os-regular",
              }}
            >
              {subject.absence_number}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "os-bold",
            }}
          >
            Действие
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row-reverse",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 5,
              borderColor: "#1d2d5b",
              borderRadius: 5,
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "os-regular",
              }}
            >
              <FontAwesome name="clone" size={16} color="#1d2d5b" />
              <Text> Активности</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#dfe2e6",
          borderBottomWidth: 2,
        }}
      ></View>
    </View>
    // <View key={key} style={subjectStyle.tableRow}>
    //   <View style={subjectStyle.tableRowElements}>
    //     <View style={subjectStyle.tableRowElementsKey}>
    //       <Text style={subjectStyle.tableKeyText}>Дисциплина</Text>
    //     </View>
    //     <View style={subjectStyle.tableRowElementsValue}>
    //       <Text style={subjectStyle.tableValueText}>{subject.name}</Text>
    //     </View>
    //   </View>
    //   <View style={subjectStyle.tableRowElements}>
    //     <View style={subjectStyle.tableRowElementsKey}>
    //       <Text style={subjectStyle.tableKeyText}>Преподаватель</Text>
    //     </View>
    //     <View style={subjectStyle.tableRowElementsValue}>
    //       <Text style={subjectStyle.tableValueText}>{subject.teacher}</Text>
    //     </View>
    //   </View>
    //   <View style={subjectStyle.tableRowElements}>
    //     <View style={subjectStyle.tableButtonKey}>
    //       <Text style={subjectStyle.tableKeyText}>Кол-во НБ</Text>
    //     </View>
    //     <View style={subjectStyle.tableButtonValue}>
    //       {/* <View style={subjectStyle.tableButtonDiv}></View> */}
    //       <Text style={subjectStyle.tableButton}>{subject.absence_number}</Text>
    //     </View>
    //   </View>
    //   <View style={subjectStyle.tableRowElements}>
    //     <View style={subjectStyle.tableButtonKey}>
    //       <Text style={subjectStyle.tableKeyText}>Действие</Text>
    //     </View>
    //     <View style={subjectStyle.tableButtonValue2}>
    //       <Text style={subjectStyle.tableButton}>
    //         <FontAwesome name="clone" color="#1d2d5b" />
    //         {/* <FontAwesomeIcon icon={faClone} style={{ color: "#1d2d5b" }} /> */}
    //         <Text> Активности</Text>
    //       </Text>
    //     </View>
    //   </View>
    //   <View style={subjectStyle.hr}></View>
    // </View>
  );
}

export default function Subjects({ navigation }) {
  const [subjects, setSubjects] = useState(SubjectModel);

  return (
    <View>
      <MyHeader navigation={navigation} />
      <ScrollView vertical={true} style={{ marginBottom: 80 }}>
        <View style={gStyle.main}>
          <Text style={gStyle.title}>Мои предметы</Text>
          <View style={gStyle.mainContainer}>
            {subjects.map((subject, index) => {
              return SubjectElements(subject, index);
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
})
