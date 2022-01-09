import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Header } from "./DrawerNavigation";
import { gStyle } from '../style'
import { ScheduleModel } from '../database/schedule'

function ScheduleElements() {}

export default function Schedule({ navigation }) {
  const [schedule, setSchedule] = useState(ScheduleModel)

  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView vertical={true} style={{ marginBottom: 80 }}>
        <View style={gStyle.main}>
          <Text style={gStyle.title}>Расписание</Text>
          <View style={gStyle.mainContainer}>
            {schedule.map((time, index) => {
              return ScheduleElements(time, index);
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
