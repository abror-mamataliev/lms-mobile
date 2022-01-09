import { StyleSheet } from "react-native";

export const appStyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f1f5f8",
  },
  title: {
    fontSize: 20,
    color: "#333",
    fontFamily: "os-regular",
    textAlign: "center",
  },
  mainContainer: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 10,
    paddingTop: 35,
    backgroundColor: "#ececf1",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export const subjectStyle = StyleSheet.create({
  table: {
    display: "flex",
    padding: 10,
  },
  tableRow: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  tableRowElement2: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableRowElement3: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableRowElementReverse3: {
    flex: 3,
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
  tableRowElementRightRegular: {
    fontSize: 16,
    fontFamily: "os-regular",
    flex: 1,
    textAlign: "right",
  },
  button: {
    padding: 5,
    borderColor: "#1d2d5b",
    borderRadius: 5,
    borderWidth: 2,
  },
  hr2: {
    borderBottomColor: "#dfe2e6",
    borderBottomWidth: 2,
  },
});

export const scheduleStyle = StyleSheet.create({
  tableHeadTextStyle: {
    fontFamily: "os-bold",
    fontSize: 16,
    textAlign: "center",
    padding: 5,
  },
  tableTextStyle: {
    fontFamily: "os-regular",
    fontSize: 16,
    textAlign: "center",
    padding: 5,
  },
});

export const ispStyle = StyleSheet.create({
  table: {
    display: "flex",
    padding: 10,
  },
  tableRow: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  tableRowElement2: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableRowElement5: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableRowElementRightBold: {
    fontFamily: "os-bold",
    flex: 1,
    textAlign: "right",
    fontSize: 16,
  },
  tableRowElementRightRegular: {
    fontFamily: "os-regular",
    flex: 1,
    textAlign: "right",
    fontSize: 16,
  },
  hr1: {
    borderBottomColor: "#e7e8eb",
    borderBottomWidth: 1,
  },
  hr2: {
    borderBottomColor: "#dfe2e6",
    borderBottomWidth: 2,
  },
  flex: {
    display: "flex",
  },
});

export const infoStyle = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    marginTop: 10,
  },
  element: {
    display: "flex",
    padding: 10,
  },
  elementRow: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  elementRowKey: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  elementRowValue: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  elementRowValueRightRegular: {
    fontFamily: "os-regular",
    flex: 1,
    textAlign: "right",
    fontSize: 16,
  },
});

export const textBold = {
  fontFamily: "os-bold",
  fontSize: 16,
};
export const textRegular = {
  fontFamily: "os-regular",
  fontSize: 16,
};
