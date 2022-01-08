import { StyleSheet } from "react-native"

export const subjectStyle = StyleSheet.create({
  tableRow: {
    display: "flex",
  },
  tableRowElements: {
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tableRowElementsKey: {
    width: "32%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableRowElementsValue: {
    width: "66%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableKeyText: {
    fontSize: 16,
    textAlign: "left",
    flex: 1,
    fontFamily: "os-bold",
  },
  tableValueText: {
    fontSize: 16,
    textAlign: "right",
    flex: 1,
    fontFamily: "os-regular",
  },
  tableButtonKey: {
    width: "32%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableButtonValue: {
    width: "9%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableButtonValue2: {
    width: "40%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableButton: {
    fontSize: 16,
    fontFamily: "os-regular",
    padding: 7,
    paddingLeft: 7,
    paddingRight: 11,
    flex: 1,
    color: "#1d2d5b",
    borderColor: "#1d2d5b",
    borderRadius: 5,
    borderWidth: 2,
    textAlign: "right",
    alignItems: "center"
  },
  tableButtonDiv: {
    flex: 1,
    textAlign: "right",
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
