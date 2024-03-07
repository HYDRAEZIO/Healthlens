import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EmergencySvreen = () => {
  return (
    <View style={styles.emergencySvreen1}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group65.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group66.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group67.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group68.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group69.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.emergencyContacts, styles.healthTipsPosition]}>
          Emergency Contacts
        </Text>
      </View>
      <View style={[styles.group1, styles.groupPosition1]}>
        <Text style={[styles.call911, styles.call911Position]}>Call 911</Text>
      </View>
      <View style={[styles.group2, styles.groupPosition1]}>
        <Text style={[styles.call911, styles.call911Position]}>
          Find Nearby Clinics
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group14.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group15.png")}
      />
      <Image
        style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group16.png")}
      />
      <Image
        style={[styles.maskGroupIcon3, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group17.png")}
      />
      <View style={styles.group3}>
        <Text style={[styles.trackWorkouts, styles.call911Position]}>
          Track Workouts
        </Text>
      </View>
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group70.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group70.png")}
      />
      <View style={[styles.group4, styles.groupPosition]}>
        <Text style={[styles.healthTips, styles.healthTipsPosition]}>
          Health Tips
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon4, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group18.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group71.png")}
      />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame15.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group72.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group72.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group73.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group72.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group74.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group75.png")}
      />
      <Image
        style={[styles.groupIcon14, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group19.png")}
      />
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconPosition1: {
    bottom: "8.69%",
    top: "82.9%",
    height: "8.4%",
  },
  groupIconPosition: {
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  healthTipsPosition: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition1: {
    height: "1.91%",
    left: "6.4%",
    position: "absolute",
  },
  call911Position: {
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  maskGroupLayout: {
    left: "64.8%",
    width: "28.8%",
    height: "1.72%",
    right: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    bottom: "9.46%",
    top: "88.25%",
    width: "29.87%",
    height: "2.29%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "9.74%",
    top: "88.54%",
    height: "1.72%",
    position: "absolute",
  },
  iconLayout: {
    width: "10.67%",
    height: "3.82%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    width: "87.2%",
    height: "17.57%",
    right: "6.4%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    bottom: "1.91%",
    top: "95.03%",
    width: "8.53%",
    height: "3.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
  },
  groupIcon: {
    width: "33.87%",
    right: "21.07%",
    left: "45.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
    bottom: "8.69%",
    top: "82.9%",
    height: "8.4%",
  },
  groupIcon2: {
    right: "59.47%",
    width: "34.13%",
    bottom: "8.69%",
    top: "82.9%",
    height: "8.4%",
  },
  groupIcon4: {
    height: "6.11%",
    bottom: "93.89%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  emergencyContacts: {
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  group: {
    width: "43.2%",
    right: "28%",
    bottom: "95.89%",
    left: "28.8%",
    top: "1.91%",
    height: "2.2%",
    position: "absolute",
  },
  call911: {
    fontSize: FontSize.size_base,
  },
  group1: {
    width: "14.13%",
    top: "28.13%",
    right: "79.47%",
    bottom: "69.96%",
  },
  group2: {
    top: "51.53%",
    bottom: "46.56%",
    right: "59.47%",
    width: "34.13%",
  },
  maskGroupIcon: {
    height: "2.01%",
    width: "50.93%",
    top: "74.88%",
    right: "42.67%",
    bottom: "23.11%",
  },
  maskGroupIcon1: {
    top: "28.27%",
    bottom: "70.01%",
  },
  maskGroupIcon2: {
    top: "51.67%",
    bottom: "46.61%",
  },
  maskGroupIcon3: {
    top: "75.07%",
    bottom: "23.21%",
  },
  trackWorkouts: {
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  group3: {
    width: "33.07%",
    top: "79.18%",
    right: "60.53%",
    bottom: "18.62%",
    height: "2.2%",
    left: "6.4%",
    position: "absolute",
  },
  groupIcon5: {
    right: "61.6%",
    left: "8.53%",
  },
  groupIcon6: {
    right: "23.2%",
    left: "46.93%",
  },
  healthTips: {
    fontSize: FontSize.size_sm,
  },
  group4: {
    width: "17.87%",
    right: "67.47%",
    left: "14.67%",
  },
  maskGroupIcon4: {
    width: "25.6%",
    right: "25.33%",
    left: "49.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon7: {
    top: "85.2%",
    bottom: "10.98%",
    left: "82.93%",
    right: "6.4%",
    width: "10.67%",
    height: "3.82%",
  },
  frameIcon: {
    width: "6.4%",
    bottom: "95.8%",
    left: "87.2%",
    height: "2.29%",
    right: "6.4%",
    top: "1.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon8: {
    top: "8.98%",
    bottom: "73.45%",
  },
  groupIcon9: {
    top: "55.78%",
    bottom: "26.65%",
  },
  vectorIcon1: {
    height: "9.55%",
    width: "26.67%",
    right: "73.33%",
    bottom: "90.45%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    top: "0%",
  },
  groupIcon11: {
    top: "32.38%",
    bottom: "50.05%",
  },
  groupIcon14: {
    height: "6.59%",
    top: "93.41%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  frameIcon1: {
    top: "95.22%",
    right: "26.67%",
    bottom: "1.72%",
    width: "8.53%",
    height: "3.06%",
    left: "64.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon2: {
    right: "65.07%",
    left: "26.4%",
  },
  frameIcon3: {
    right: "10.93%",
    left: "80.53%",
  },
  frameIcon4: {
    right: "82.13%",
    left: "9.33%",
  },
  frameIcon5: {
    top: "94.65%",
    right: "44.53%",
    bottom: "1.53%",
    left: "44.8%",
  },
  emergencySvreen1: {
    flex: 1,
    height: 1047,
    overflow: "hidden",
    width: "100%",
  },
});

export default EmergencySvreen;
