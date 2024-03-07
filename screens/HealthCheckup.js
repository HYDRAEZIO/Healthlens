import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HealthCheckup = () => {
  return (
    <View style={styles.healthCheckup1}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector22.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group69.png")}
      />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame16.png")}
      />
      <Image
        style={styles.groupIcon1}
        contentFit="cover"
        source={require("../assets/group76.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group77.png")}
      />
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame17.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.trackWorkouts, styles.nutritionTypo]}>
          Track workouts
        </Text>
      </View>
      <View style={[styles.group1, styles.groupLayout1]}>
        <Text style={[styles.trackWorkouts, styles.nutritionTypo]}>
          Manage medications
        </Text>
      </View>
      <View style={[styles.group2, styles.groupLayout1]}>
        <Text style={[styles.trackWorkouts, styles.nutritionTypo]}>
          Find your doctor
        </Text>
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group19.png")}
      />
      <View style={[styles.group3, styles.groupPosition2]}>
        <Text style={styles.viewAllTypo}>View all</Text>
      </View>
      <View style={[styles.group4, styles.groupPosition2]}>
        <Text style={styles.viewAllTypo}>View all</Text>
      </View>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group78.png")}
      />
      <View style={[styles.group5, styles.groupPosition1]}>
        <Text style={[styles.heartHealth, styles.viewAllTypo]}>
          Heart health
        </Text>
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout3]}
        contentFit="cover"
        source={require("../assets/frame18.png")}
      />
      <View style={[styles.group6, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector23.png")}
        />
        <Text style={[styles.track, styles.bookTypo]}>Track</Text>
      </View>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group78.png")}
      />
      <View style={[styles.group7, styles.groupPosition1]}>
        <Text style={[styles.heartHealth, styles.viewAllTypo]}>
          Doctor appointments
        </Text>
      </View>
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout3]}
        contentFit="cover"
        source={require("../assets/frame19.png")}
      />
      <View style={[styles.group8, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector23.png")}
        />
        <Text style={[styles.book, styles.bookTypo]}>Book</Text>
      </View>
      <Image
        style={[styles.groupIcon5, styles.groupIconPosition4]}
        contentFit="cover"
        source={require("../assets/group79.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group20.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconPosition3]}
        contentFit="cover"
        source={require("../assets/group79.png")}
      />
      <Image
        style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group21.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group80.png")}
      />
      <Image
        style={styles.maskGroupIcon3}
        contentFit="cover"
        source={require("../assets/mask-group22.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group79.png")}
      />
      <Image
        style={[styles.maskGroupIcon4, styles.maskGroupPosition2]}
        contentFit="cover"
        source={require("../assets/mask-group23.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group79.png")}
      />
      <View style={[styles.group9, styles.groupLayout]}>
        <Text style={styles.dentist}>Dentist</Text>
      </View>
      <Image
        style={[styles.groupIcon10, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group80.png")}
      />
      <Image
        style={[styles.maskGroupIcon5, styles.maskGroupPosition1]}
        contentFit="cover"
        source={require("../assets/mask-group24.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group79.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group79.png")}
      />
      <Image
        style={[styles.maskGroupIcon6, styles.maskGroupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group25.png")}
      />
      <View style={[styles.group10, styles.groupLayout]}>
        <Text style={styles.dentist}>Vaccinations</Text>
      </View>
      <Image
        style={[styles.groupIcon13, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group80.png")}
      />
      <Image
        style={[styles.maskGroupIcon7, styles.maskGroupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group26.png")}
      />
      <View style={[styles.group11, styles.groupLayout1]}>
        <Text style={styles.nutritionTypo}>Nutrition</Text>
      </View>
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame20.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame21.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.frameIconPosition1]}
        contentFit="cover"
        source={require("../assets/frame22.png")}
      />
      <Image
        style={[styles.frameIcon7, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame23.png")}
      />
      <Image
        style={[styles.frameIcon8, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame24.png")}
      />
      <Image
        style={[styles.frameIcon9, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame25.png")}
      />
      <Image
        style={[styles.frameIcon10, styles.frameIconPosition1]}
        contentFit="cover"
        source={require("../assets/frame26.png")}
      />
      <Image
        style={[styles.frameIcon11, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame27.png")}
      />
      <Image
        style={[styles.frameIcon12, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame28.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nutritionTypo: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupLayout1: {
    height: "2.23%",
    position: "absolute",
  },
  groupPosition2: {
    left: "81.6%",
    width: "12%",
    height: "2.01%",
    right: "6.4%",
    position: "absolute",
  },
  groupIconLayout: {
    width: "87.2%",
    height: "7.37%",
    right: "6.4%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    left: "21.33%",
    height: "2.01%",
    position: "absolute",
  },
  viewAllTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  frameIconLayout3: {
    left: "12.8%",
    right: "82.93%",
    width: "4.27%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    left: "72.27%",
    width: "17.07%",
    right: "10.67%",
    height: "3.57%",
    position: "absolute",
  },
  bookTypo: {
    color: Color.colorBlack,
    top: "26.56%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    position: "absolute",
  },
  groupIconPosition4: {
    bottom: "40.63%",
    top: "45.54%",
    height: "13.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupLayout: {
    bottom: "41.96%",
    top: "56.25%",
    width: "21.33%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition3: {
    left: "36.27%",
    right: "36%",
    width: "27.73%",
  },
  groupIconPosition2: {
    left: "66.13%",
    width: "27.47%",
    right: "6.4%",
  },
  groupIconPosition1: {
    bottom: "18.3%",
    top: "67.86%",
    height: "13.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupPosition2: {
    bottom: "19.64%",
    top: "78.57%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: "1.67%",
    position: "absolute",
  },
  maskGroupPosition1: {
    left: "68.27%",
    width: "23.2%",
    right: "8.53%",
  },
  groupIconPosition: {
    bottom: "3.57%",
    top: "82.59%",
    height: "13.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupPosition: {
    bottom: "4.91%",
    top: "93.3%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout2: {
    left: "44%",
    right: "43.2%",
    width: "12.8%",
    height: "5.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout1: {
    left: "73.6%",
    right: "13.6%",
    width: "12.8%",
    height: "5.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconPosition1: {
    bottom: "45.98%",
    top: "48.66%",
  },
  frameIconLayout: {
    left: "13.87%",
    width: "12.8%",
    height: "5.36%",
    right: "73.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconPosition: {
    bottom: "23.77%",
    top: "70.87%",
  },
  vectorIcon: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    height: "7.14%",
    bottom: "92.86%",
    left: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  frameIcon: {
    right: "89.33%",
    bottom: "95.54%",
    left: "6.4%",
    top: "2.68%",
    width: "4.27%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon1: {
    width: "8.53%",
    top: "1.79%",
    bottom: "94.64%",
    left: "85.07%",
    right: "6.4%",
    height: "3.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "11.16%",
    width: "26.67%",
    bottom: "88.84%",
    right: "73.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon2: {
    height: "4.35%",
    width: "86.93%",
    top: "8.98%",
    right: "6.53%",
    bottom: "86.66%",
    left: "6.53%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon1: {
    top: "10.27%",
    bottom: "87.95%",
    right: "10.67%",
    left: "85.07%",
    width: "4.27%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  trackWorkouts: {
    fontWeight: "700",
  },
  group: {
    width: "29.07%",
    top: "16.96%",
    right: "64.53%",
    bottom: "80.8%",
    height: "2.23%",
    left: "6.4%",
    position: "absolute",
  },
  group1: {
    width: "38.67%",
    top: "41.52%",
    right: "54.93%",
    bottom: "56.25%",
    left: "6.4%",
  },
  group2: {
    width: "31.2%",
    top: "63.84%",
    right: "62.4%",
    bottom: "33.93%",
    left: "6.4%",
  },
  maskGroupIcon: {
    width: "18.67%",
    top: "17.19%",
    left: "74.93%",
    height: "2.01%",
    bottom: "80.8%",
    right: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  group3: {
    top: "41.74%",
    bottom: "56.25%",
  },
  group4: {
    top: "64.06%",
    bottom: "33.93%",
  },
  groupIcon3: {
    top: "20.98%",
    bottom: "71.65%",
  },
  heartHealth: {
    fontWeight: "700",
  },
  group5: {
    width: "20.8%",
    top: "23.66%",
    right: "57.87%",
    bottom: "74.33%",
  },
  frameIcon2: {
    top: "23.77%",
    bottom: "74.44%",
  },
  track: {
    left: "28.13%",
  },
  group6: {
    top: "22.88%",
    bottom: "73.55%",
  },
  groupIcon4: {
    top: "29.69%",
    bottom: "62.95%",
  },
  group7: {
    width: "35.2%",
    top: "32.37%",
    right: "43.47%",
    bottom: "65.63%",
  },
  frameIcon3: {
    top: "32.48%",
    bottom: "65.74%",
  },
  book: {
    left: "28.91%",
  },
  group8: {
    top: "31.58%",
    bottom: "64.84%",
  },
  groupIcon5: {
    right: "65.87%",
    width: "27.73%",
    left: "6.4%",
  },
  maskGroupIcon1: {
    left: "9.6%",
    right: "69.07%",
  },
  groupIcon6: {
    bottom: "40.63%",
    top: "45.54%",
    height: "13.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon2: {
    left: "39.47%",
    right: "39.2%",
  },
  groupIcon7: {
    bottom: "40.63%",
    top: "45.54%",
    height: "13.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon3: {
    width: "22.93%",
    left: "68.53%",
    right: "8.53%",
    bottom: "41.96%",
    top: "56.25%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon8: {
    right: "65.87%",
    width: "27.73%",
    left: "6.4%",
  },
  maskGroupIcon4: {
    width: "21.6%",
    left: "9.33%",
    right: "69.07%",
  },
  groupIcon9: {
    left: "36.27%",
    right: "36%",
    width: "27.73%",
  },
  dentist: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group9: {
    width: "9.6%",
    top: "78.63%",
    right: "45.07%",
    bottom: "19.7%",
    left: "45.33%",
  },
  groupIcon10: {
    left: "66.13%",
    width: "27.47%",
    right: "6.4%",
  },
  maskGroupIcon5: {
    bottom: "19.64%",
    top: "78.57%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon11: {
    right: "65.87%",
    width: "27.73%",
    left: "6.4%",
  },
  groupIcon12: {
    left: "36.27%",
    right: "36%",
    width: "27.73%",
  },
  maskGroupIcon6: {
    width: "21.07%",
    left: "39.73%",
    right: "39.2%",
  },
  group10: {
    top: "93.36%",
    right: "71.2%",
    bottom: "4.97%",
    left: "11.73%",
    width: "17.07%",
    height: "1.67%",
  },
  groupIcon13: {
    left: "66.13%",
    width: "27.47%",
    right: "6.4%",
  },
  maskGroupIcon7: {
    left: "68.27%",
    width: "23.2%",
    right: "8.53%",
  },
  group11: {
    width: "16.27%",
    right: "41.33%",
    bottom: "95.09%",
    left: "42.4%",
    top: "2.68%",
  },
  frameIcon4: {
    bottom: "8.93%",
    top: "85.71%",
  },
  frameIcon5: {
    bottom: "8.93%",
    top: "85.71%",
  },
  frameIcon6: {
    right: "13.87%",
    left: "73.33%",
    width: "12.8%",
    height: "5.36%",
    bottom: "45.98%",
    top: "48.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon7: {
    bottom: "23.77%",
    top: "70.87%",
  },
  frameIcon8: {
    left: "44%",
    right: "43.2%",
    width: "12.8%",
    height: "5.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon9: {
    bottom: "45.98%",
    top: "48.66%",
  },
  frameIcon10: {
    left: "44%",
    right: "43.2%",
    width: "12.8%",
    height: "5.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon11: {
    left: "73.6%",
    right: "13.6%",
    width: "12.8%",
    height: "5.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon12: {
    bottom: "8.93%",
    top: "85.71%",
  },
  healthCheckup1: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default HealthCheckup;
