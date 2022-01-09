import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { Header } from "./DrawerNavigation";
import { gStyle } from "../style";

function SubjectElements(subject, key) {
  return (
    <View
      key={key}
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
  );
}

export default function Subjects({ navigation }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      try {
        const result = await AsyncStorage.getItem("subjects");
        const info = result != null ? JSON.parse(result) : null;
        setSubjects(info);
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
        <View style={gStyle.main}>
          <Text style={gStyle.title}>Мои предметы</Text>
          <View style={gStyle.mainContainer}>
            {subjects ? subjects.map((subject, index) => {
              return SubjectElements(subject, index);
            }) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
