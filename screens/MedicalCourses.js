import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const MedicalCourses = () => {
  return (
    <View style={styles.medicalCourses1}>
      <Image
        style={[styles.vectorIcon, styles.frameIconLayout3]}
        contentFit="cover"
        source={require("../assets/vector29.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group69.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.frameIconLayout3]}
        contentFit="cover"
        source={require("../assets/group107.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout3]}
        contentFit="cover"
        source={require("../assets/frame36.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout3]}
        contentFit="cover"
        source={require("../assets/frame37.png")}
      />
      <View style={[styles.group, styles.groupPosition4]}>
        <Text style={[styles.medicalCourses, styles.enrollPosition]}>
          Medical Courses
        </Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group108.png")}
      />
      <View style={[styles.group1, styles.groupPosition3]}>
        <Text style={[styles.courseName, styles.recordsTypo]}>Course Name</Text>
      </View>
      <View style={[styles.group2, styles.groupPosition2]}>
        <Text style={[styles.briefDescriptionOf, styles.enrollPosition]}>
          Brief description of the course...
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group32.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group109.png")}
      />
      <View style={[styles.group3, styles.groupPosition1]}>
        <Text style={[styles.enroll, styles.enrollPosition]}>Enroll</Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group108.png")}
      />
      <View style={[styles.group4, styles.groupPosition3]}>
        <Text style={[styles.courseName, styles.recordsTypo]}>Course Name</Text>
      </View>
      <View style={[styles.group5, styles.groupPosition2]}>
        <Text style={[styles.briefDescriptionOf, styles.enrollPosition]}>
          Brief description of the course...
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group33.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group110.png")}
      />
      <View style={[styles.group6, styles.groupPosition1]}>
        <Text style={[styles.enroll, styles.enrollPosition]}>Enroll</Text>
      </View>
      <View style={[styles.group7, styles.groupPosition4]}>
        <Text style={[styles.medicalCourses, styles.enrollPosition]}>
          Course Categories
        </Text>
      </View>
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group111.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame38.png")}
      />
      <View style={[styles.group8, styles.groupPosition]}>
        <Text style={[styles.courseName, styles.recordsTypo]}>Cardiology</Text>
      </View>
      <Image
        style={[styles.groupIcon7, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group111.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame39.png")}
      />
      <View style={[styles.group9, styles.groupPosition]}>
        <Text style={[styles.courseName, styles.recordsTypo]}>Anatomy</Text>
      </View>
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group112.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame40.png")}
      />
      <View style={styles.group10}>
        <Text style={[styles.courseName, styles.recordsTypo]}>Medical</Text>
        <Text style={[styles.records, styles.recordsTypo]}>Records</Text>
      </View>
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group112.png")}
      />
      <Image
        style={styles.frameIcon5}
        contentFit="cover"
        source={require("../assets/frame41.png")}
      />
      <View style={styles.group11}>
        <Text style={[styles.courseName, styles.recordsTypo]}>
          Pharmacology
        </Text>
      </View>
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group69.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame42.png")}
      />
      <Image
        style={[styles.frameIcon7, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame43.png")}
      />
      <Image
        style={styles.frameIcon8}
        contentFit="cover"
        source={require("../assets/frame44.png")}
      />
      <Image
        style={[styles.frameIcon9, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame45.png")}
      />
      <Image
        style={[styles.frameIcon10, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame46.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout3: {
    height: "8%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  groupPosition4: {
    left: "6.4%",
    height: "3.75%",
    position: "absolute",
  },
  enrollPosition: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIconLayout2: {
    right: "6.4%",
    width: "87.2%",
    height: "20%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition3: {
    right: "61.33%",
    width: "28%",
    left: "10.67%",
    height: "2.88%",
    position: "absolute",
  },
  recordsTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    left: "0%",
    position: "absolute",
  },
  groupPosition2: {
    right: "39.73%",
    width: "49.6%",
    height: "2.25%",
    left: "10.67%",
    position: "absolute",
  },
  maskGroupLayout: {
    right: "63.73%",
    width: "25.6%",
    height: "1.88%",
    left: "10.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition2: {
    right: "10.67%",
    width: "89.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    left: "45.33%",
    right: "44%",
    width: "10.67%",
    height: "2.5%",
    position: "absolute",
  },
  groupIconLayout1: {
    bottom: "24%",
    top: "67%",
    width: "41.6%",
    height: "9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout2: {
    bottom: "26%",
    top: "69%",
    height: "5%",
    width: "10.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "27.25%",
    top: "69.88%",
    height: "2.88%",
    position: "absolute",
  },
  groupIconPosition: {
    left: "52%",
    right: "6.4%",
  },
  groupIconLayout: {
    bottom: "11%",
    top: "78%",
    height: "11%",
    width: "41.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout1: {
    width: "7.2%",
    height: "3.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    bottom: "2.69%",
    top: "94.69%",
    width: "5.6%",
    height: "2.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon: {
    bottom: "92%",
    top: "0%",
  },
  groupIcon1: {
    height: "4%",
    width: "8.53%",
    top: "2%",
    right: "87.2%",
    bottom: "94%",
    left: "4.27%",
  },
  frameIcon: {
    height: "2%",
    width: "4.27%",
    top: "3%",
    right: "45.6%",
    bottom: "95%",
    left: "50.13%",
  },
  frameIcon1: {
    height: "1.75%",
    width: "3.73%",
    top: "3.13%",
    right: "4.27%",
    bottom: "95.13%",
    left: "92%",
  },
  medicalCourses: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
  },
  group: {
    width: "45.6%",
    top: "9.81%",
    right: "48%",
    bottom: "86.44%",
  },
  groupIcon2: {
    top: "16%",
    bottom: "64%",
  },
  courseName: {
    top: "0%",
  },
  group1: {
    top: "18.13%",
    bottom: "79%",
    left: "10.67%",
  },
  briefDescriptionOf: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
  },
  group2: {
    top: "22.5%",
    bottom: "75.25%",
  },
  maskGroupIcon: {
    top: "26%",
    bottom: "72.13%",
  },
  groupIcon3: {
    height: "34%",
    bottom: "66%",
  },
  enroll: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
  },
  group3: {
    top: "30.19%",
    bottom: "67.31%",
  },
  groupIcon4: {
    top: "38%",
    bottom: "42%",
  },
  group4: {
    top: "40.13%",
    bottom: "57%",
    left: "10.67%",
  },
  group5: {
    top: "44.5%",
    bottom: "53.25%",
  },
  maskGroupIcon1: {
    top: "48%",
    bottom: "50.13%",
  },
  groupIcon5: {
    height: "56%",
    bottom: "44%",
  },
  group6: {
    top: "52.19%",
    bottom: "45.31%",
  },
  group7: {
    width: "50.93%",
    top: "60.81%",
    right: "42.67%",
    bottom: "35.44%",
  },
  groupIcon6: {
    right: "52%",
    left: "6.4%",
  },
  frameIcon2: {
    right: "79.87%",
    left: "9.47%",
  },
  group8: {
    width: "23.2%",
    right: "54.4%",
    left: "22.4%",
  },
  groupIcon7: {
    bottom: "24%",
    top: "67%",
    width: "41.6%",
    height: "9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon3: {
    right: "32.4%",
    left: "56.93%",
  },
  group9: {
    width: "19.2%",
    right: "10.93%",
    left: "69.87%",
  },
  groupIcon8: {
    right: "52%",
    left: "6.4%",
  },
  frameIcon4: {
    top: "81.81%",
    right: "82.13%",
    bottom: "14.81%",
    left: "10.67%",
  },
  records: {
    top: "47.73%",
  },
  group10: {
    height: "5.5%",
    width: "17.07%",
    top: "80.13%",
    right: "62.93%",
    bottom: "14.38%",
    left: "20%",
    position: "absolute",
  },
  groupIcon9: {
    left: "52%",
    right: "6.4%",
  },
  frameIcon5: {
    top: "81%",
    right: "37.73%",
    bottom: "14%",
    left: "51.6%",
    height: "5%",
    width: "10.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  group11: {
    width: "30.67%",
    top: "81.88%",
    right: "4.8%",
    bottom: "15.25%",
    left: "64.53%",
    height: "2.88%",
    position: "absolute",
  },
  groupIcon10: {
    top: "92%",
    bottom: "0%",
    height: "8%",
  },
  frameIcon6: {
    top: "94.31%",
    right: "82.67%",
    bottom: "2.31%",
    left: "10.13%",
  },
  frameIcon7: {
    right: "65.33%",
    left: "29.07%",
  },
  frameIcon8: {
    width: "8%",
    top: "94.13%",
    right: "45.33%",
    bottom: "2.13%",
    left: "46.67%",
    height: "3.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon9: {
    right: "27.73%",
    left: "66.67%",
  },
  frameIcon10: {
    right: "10.4%",
    left: "84%",
  },
  medicalCourses1: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MedicalCourses;
