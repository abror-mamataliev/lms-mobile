import { StyleSheet } from "react-native"

export const subjectStyle = StyleSheet.create({
  mainContainer: {
    padding: 20,
    marginVertical: 20,
    backgroundColor: "#ffffff"
  },
  tableRow: {
    // padding: 15,
    display: "flex",
    alignSelf: "stretch",
    // flexDirection: "row"
  },
  tableHeadElementText: {
    fontFamily: "os-bold"
  },
  tableRowElements: {
    flex: 1,
    // alignSelf: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
})
