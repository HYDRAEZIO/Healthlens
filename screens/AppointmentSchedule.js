import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AppointmentSchedule = () => {
  return (
    <View style={styles.appointmentSchedule1}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group51.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group51.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group51.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group51.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group51.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group51.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector15.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group52.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group53.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.february, styles.monTypo]}>14–20 February</Text>
      </View>
      <Image
        style={styles.groupIcon8}
        contentFit="cover"
        source={require("../assets/group54.png")}
      />
      <View style={[styles.group1, styles.groupPosition4]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
        <Text style={[styles.appointments, styles.calendarTypo]}>
          Appointments
        </Text>
      </View>
      <View style={[styles.group2, styles.groupPosition4]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
        <Text style={[styles.reminders, styles.calendarTypo]}>Reminders</Text>
      </View>
      <View style={[styles.group3, styles.groupPosition4]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
        <Text style={[styles.calendar, styles.calendarTypo]}>Calendar</Text>
      </View>
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group55.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group55.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group55.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group55.png")}
      />
      <Image
        style={styles.groupIcon13}
        contentFit="cover"
        source={require("../assets/group56.png")}
      />
      <Image
        style={[styles.groupIcon14, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group56.png")}
      />
      <Image
        style={[styles.groupIcon15, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group55.png")}
      />
      <Image
        style={[styles.groupIcon16, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group56.png")}
      />
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupPosition1]}
        contentFit="cover"
        source={require("../assets/mask-group6.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupLayout2]}
        contentFit="cover"
        source={require("../assets/mask-group7.png")}
      />
      <Image
        style={[styles.maskGroupIcon2, styles.maskGroupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group8.png")}
      />
      <Image
        style={[styles.maskGroupIcon3, styles.maskGroupLayout2]}
        contentFit="cover"
        source={require("../assets/mask-group9.png")}
      />
      <Image
        style={[styles.maskGroupIcon4, styles.maskGroupLayout2]}
        contentFit="cover"
        source={require("../assets/mask-group10.png")}
      />
      <Image
        style={[styles.maskGroupIcon5, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group11.png")}
      />
      <Image
        style={[styles.maskGroupIcon6, styles.maskGroupPosition1]}
        contentFit="cover"
        source={require("../assets/mask-group12.png")}
      />
      <Image
        style={[styles.maskGroupIcon7, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group13.png")}
      />
      <Image
        style={[styles.groupIcon17, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group57.png")}
      />
      <View style={[styles.group4, styles.groupPosition3]}>
        <Text style={styles.text}>14</Text>
      </View>
      <View style={[styles.group5, styles.groupPosition3]}>
        <Text style={styles.text}>15</Text>
      </View>
      <View style={[styles.group6, styles.groupPosition3]}>
        <Text style={styles.text}>16</Text>
      </View>
      <View style={[styles.group7, styles.groupPosition3]}>
        <Text style={styles.text}>17</Text>
      </View>
      <View style={[styles.group8, styles.groupPosition2]}>
        <Text style={styles.text}>18</Text>
      </View>
      <View style={[styles.group9, styles.groupPosition3]}>
        <Text style={styles.text}>19</Text>
      </View>
      <View style={styles.group10}>
        <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
      </View>
      <View style={[styles.group11, styles.groupPosition3]}>
        <Text style={styles.text}>20</Text>
      </View>
      <View style={[styles.group12, styles.groupPosition1]}>
        <Text style={[styles.mon, styles.monTypo]}>Tue</Text>
      </View>
      <View style={[styles.group13, styles.groupPosition1]}>
        <Text style={[styles.mon, styles.monTypo]}>Wed</Text>
      </View>
      <View style={[styles.group14, styles.groupPosition]}>
        <Text style={[styles.mon, styles.monTypo]}>Thu</Text>
      </View>
      <View style={[styles.group15, styles.groupPosition1]}>
        <Text style={[styles.mon, styles.monTypo]}>Fri</Text>
      </View>
      <View style={[styles.group16, styles.groupPosition1]}>
        <Text style={[styles.mon, styles.monTypo]}>Sat</Text>
      </View>
      <View style={[styles.group17, styles.groupPosition]}>
        <Text style={[styles.mon, styles.monTypo]}>Sun</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout4: {
    top: "32.98%",
    width: "0.27%",
    height: "64.62%",
    bottom: "2.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  monTypo: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition4: {
    bottom: "84.71%",
    top: "11.39%",
    width: "29.07%",
    height: "3.9%",
    position: "absolute",
  },
  calendarTypo: {
    color: Color.colorBlack,
    top: "15.38%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  groupIconLayout1: {
    bottom: "52.92%",
    width: "9.87%",
    height: "14.09%",
    top: "32.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    left: "45.33%",
    right: "44.8%",
  },
  groupIconLayout2: {
    width: "9.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    bottom: "45.73%",
    top: "49.48%",
    height: "4.8%",
    width: "9.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition1: {
    right: "85.87%",
    left: "4.27%",
  },
  maskGroupPosition1: {
    left: "6.4%",
    right: "87.73%",
  },
  maskGroupLayout2: {
    width: "5.87%",
    height: "2.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupPosition: {
    right: "46.67%",
    left: "47.47%",
  },
  maskGroupLayout: {
    bottom: "46.93%",
    top: "50.67%",
    width: "5.87%",
    height: "2.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition3: {
    bottom: "71.21%",
    top: "26.09%",
    height: "2.7%",
    position: "absolute",
  },
  groupPosition2: {
    left: "61.87%",
    right: "34.13%",
    width: "4%",
  },
  groupPosition1: {
    bottom: "76.24%",
    top: "21.51%",
    height: "2.25%",
    position: "absolute",
  },
  groupPosition: {
    width: "5.6%",
    bottom: "76.24%",
    top: "21.51%",
    height: "2.25%",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  groupIcon: {
    right: "83.73%",
    left: "16%",
    bottom: "2.4%",
  },
  groupIcon1: {
    right: "42.67%",
    left: "57.07%",
    bottom: "2.4%",
  },
  groupIcon2: {
    right: "70.4%",
    left: "29.33%",
    bottom: "2.4%",
  },
  groupIcon3: {
    right: "56.53%",
    left: "43.2%",
    bottom: "2.4%",
  },
  groupIcon4: {
    right: "28.8%",
    left: "70.93%",
    bottom: "2.4%",
  },
  groupIcon5: {
    right: "14.93%",
    left: "84.8%",
    bottom: "2.4%",
  },
  vectorIcon1: {
    height: "14.99%",
    width: "26.67%",
    right: "73.33%",
    bottom: "85.01%",
    left: "0%",
    top: "0%",
    maxWidth: "100%",
  },
  groupIcon6: {
    height: "5.85%",
    width: "8.8%",
    top: "1.87%",
    right: "89.47%",
    bottom: "92.28%",
    left: "1.73%",
  },
  groupIcon7: {
    height: "7.2%",
    width: "12.8%",
    top: "1.2%",
    bottom: "91.6%",
    left: "87.2%",
    right: "0%",
  },
  february: {
    fontSize: FontSize.size_5xl,
  },
  group: {
    height: "4.5%",
    width: "43.73%",
    top: "2.47%",
    right: "41.87%",
    bottom: "93.03%",
    left: "14.4%",
    position: "absolute",
  },
  groupIcon8: {
    height: "5.1%",
    width: "91.47%",
    top: "10.79%",
    right: "4.27%",
    bottom: "84.11%",
    left: "4.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  appointments: {
    left: "11.93%",
  },
  group1: {
    right: "65.6%",
    left: "5.33%",
  },
  reminders: {
    left: "20.18%",
    fontWeight: "700",
    top: "15.38%",
  },
  group2: {
    right: "35.47%",
    left: "35.47%",
  },
  calendar: {
    left: "25.69%",
  },
  group3: {
    right: "5.33%",
    left: "65.6%",
  },
  groupIcon9: {
    right: "85.87%",
    left: "4.27%",
  },
  groupIcon10: {
    bottom: "52.92%",
    width: "9.87%",
    height: "14.09%",
    top: "32.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon11: {
    top: "69.42%",
    right: "58.67%",
    bottom: "16.49%",
    left: "31.47%",
    height: "14.09%",
    width: "9.87%",
  },
  groupIcon12: {
    top: "73.16%",
    right: "30.93%",
    left: "59.2%",
    bottom: "12.74%",
    height: "14.09%",
    width: "9.87%",
  },
  groupIcon13: {
    top: "63.87%",
    right: "72.27%",
    bottom: "31.33%",
    left: "17.87%",
    height: "4.8%",
    width: "9.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon14: {
    right: "85.87%",
    left: "4.27%",
  },
  groupIcon15: {
    top: "83.51%",
    width: "9.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    height: "14.09%",
    bottom: "2.4%",
  },
  groupIcon16: {
    left: "45.33%",
    right: "44.8%",
  },
  maskGroupIcon: {
    bottom: "63.42%",
    top: "34.18%",
    width: "5.87%",
    height: "2.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon1: {
    top: "65.07%",
    right: "74.13%",
    bottom: "32.53%",
    left: "20%",
  },
  maskGroupIcon2: {
    left: "47.47%",
    bottom: "63.42%",
    top: "34.18%",
    width: "5.87%",
    height: "2.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon3: {
    top: "70.61%",
    bottom: "26.99%",
    left: "33.6%",
    right: "60.53%",
  },
  maskGroupIcon4: {
    top: "74.36%",
    right: "32.8%",
    bottom: "23.24%",
    left: "61.33%",
  },
  maskGroupIcon5: {
    left: "6.4%",
    right: "87.73%",
  },
  maskGroupIcon6: {
    top: "84.86%",
    width: "5.87%",
    height: "2.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    bottom: "12.74%",
  },
  maskGroupIcon7: {
    left: "47.47%",
    right: "46.67%",
  },
  groupIcon17: {
    height: "8.7%",
    top: "20.69%",
    bottom: "70.61%",
    width: "9.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group4: {
    right: "88.53%",
    left: "7.47%",
    width: "4%",
    bottom: "71.21%",
    top: "26.09%",
    height: "2.7%",
  },
  group5: {
    right: "74.67%",
    left: "21.33%",
    width: "4%",
    bottom: "71.21%",
    top: "26.09%",
    height: "2.7%",
  },
  group6: {
    right: "61.6%",
    left: "34.4%",
    width: "4%",
    bottom: "71.21%",
    top: "26.09%",
    height: "2.7%",
  },
  group7: {
    right: "47.73%",
    left: "48.27%",
    width: "4%",
    bottom: "71.21%",
    top: "26.09%",
    height: "2.7%",
  },
  group8: {
    bottom: "71.21%",
    top: "26.09%",
    height: "2.7%",
    position: "absolute",
    left: "61.87%",
    right: "34.13%",
  },
  group9: {
    right: "20.53%",
    left: "75.47%",
    width: "4%",
    bottom: "71.21%",
    top: "26.09%",
    height: "2.7%",
  },
  mon: {
    fontSize: FontSize.size_xs,
  },
  group10: {
    top: "21.36%",
    right: "87.47%",
    bottom: "76.39%",
    width: "6.13%",
    height: "2.25%",
    left: "6.4%",
    position: "absolute",
  },
  group11: {
    right: "6.93%",
    left: "89.07%",
    width: "4%",
    bottom: "71.21%",
    top: "26.09%",
    height: "2.7%",
  },
  group12: {
    width: "5.33%",
    right: "73.87%",
    left: "20.8%",
  },
  group13: {
    left: "33.33%",
    width: "6.13%",
    right: "60.53%",
  },
  group14: {
    right: "46.93%",
    left: "47.47%",
  },
  group15: {
    left: "61.87%",
    right: "34.13%",
    width: "4%",
  },
  group16: {
    width: "4.8%",
    right: "20%",
    left: "75.2%",
  },
  group17: {
    right: "6.13%",
    left: "88.27%",
  },
  appointmentSchedule1: {
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default AppointmentSchedule;
