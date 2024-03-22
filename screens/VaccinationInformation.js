import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const VaccinationInformation = () => {
  return (
    <View style={styles.vaccinationInformation}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector48.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group135.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group136.png")}
      />
      <Image
        style={[styles.frameIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/frame69.png")}
      />
      <View style={[styles.group, styles.groupLayout1]}>
        <Text style={styles.vaccinationRelatedProblems}>
          Vaccination Related Problems
        </Text>
      </View>
      <View style={[styles.group1, styles.groupLayout]}>
        <Text
          style={[
            styles.commonVaccinationRelatedIss,
            styles.feedbackcontactTypo,
          ]}
        >
          Common vaccination-related issues:
        </Text>
      </View>
      <View style={[styles.group2, styles.groupPosition1]}>
        <Text
          style={[
            styles.commonVaccinationRelatedIss,
            styles.feedbackcontactTypo,
          ]}
        >
          Pain and swelling at the injection site
        </Text>
      </View>
      <View style={[styles.group3, styles.groupPosition1]}>
        <Text
          style={[
            styles.commonVaccinationRelatedIss,
            styles.feedbackcontactTypo,
          ]}
        >
          Fever
        </Text>
      </View>
      <View style={[styles.group4, styles.groupPosition1]}>
        <Text
          style={[
            styles.commonVaccinationRelatedIss,
            styles.feedbackcontactTypo,
          ]}
        >
          Fatigue
        </Text>
      </View>
      <View style={[styles.group5, styles.groupPosition1]}>
        <Text
          style={[
            styles.commonVaccinationRelatedIss,
            styles.feedbackcontactTypo,
          ]}
        >
          Headache
        </Text>
      </View>
      <View style={[styles.group6, styles.groupPosition]}>
        <Text
          style={[
            styles.commonVaccinationRelatedIss,
            styles.feedbackcontactTypo,
          ]}
        >
          For more information, visit
        </Text>
      </View>
      <View style={[styles.group7, styles.groupPosition]}>
        <Text
          style={[
            styles.commonVaccinationRelatedIss,
            styles.feedbackcontactTypo,
          ]}
        >
          Vaccination FAQs
        </Text>
      </View>
      <View style={[styles.group8, styles.groupLayout1]}>
        <Text style={styles.vaccinationRelatedProblems}>
          Clinic/Hospital Location
        </Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group137.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group138.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/frame74.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/frame75.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.groupLayout1]}
        contentFit="cover"
        source={require("../assets/frame71.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame72.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame76.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/frame77.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group139.png")}
      />
      <View style={[styles.group9, styles.groupLayout]}>
        <Text style={[styles.feedbackcontact, styles.feedbackcontactTypo]}>
          Feedback/Contact
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout1: {
    height: "4.41%",
    position: "absolute",
  },
  groupLayout: {
    height: "2.94%",
    position: "absolute",
  },
  feedbackcontactTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition1: {
    left: "12.27%",
    height: "2.94%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "56.9%",
    top: "40.16%",
    height: "2.94%",
    position: "absolute",
  },
  frameIconLayout: {
    bottom: "11.38%",
    top: "85.54%",
    width: "5.6%",
    height: "3.08%",
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
    height: "9.4%",
    bottom: "90.6%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon1: {
    height: "4.7%",
    width: "8.53%",
    top: "2.35%",
    right: "87.2%",
    bottom: "92.95%",
    left: "4.27%",
    position: "absolute",
    maxWidth: "100%",
  },
  frameIcon: {
    height: "2.06%",
    width: "3.73%",
    top: "3.67%",
    right: "4.27%",
    bottom: "94.27%",
    left: "92%",
    position: "absolute",
    maxWidth: "100%",
  },
  vaccinationRelatedProblems: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorGray_400,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group: {
    width: "84%",
    top: "11.53%",
    right: "9.6%",
    bottom: "84.07%",
    left: "6.4%",
  },
  commonVaccinationRelatedIss: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_base,
  },
  group1: {
    width: "64.53%",
    top: "19.02%",
    right: "29.07%",
    bottom: "78.05%",
    left: "6.4%",
  },
  group2: {
    width: "65.87%",
    top: "23.72%",
    right: "21.87%",
    bottom: "73.35%",
  },
  group3: {
    width: "9.87%",
    top: "27.24%",
    right: "77.87%",
    bottom: "69.82%",
  },
  group4: {
    width: "13.33%",
    top: "30.76%",
    right: "74.4%",
    bottom: "66.3%",
  },
  group5: {
    width: "18.13%",
    top: "34.29%",
    right: "69.6%",
    bottom: "62.78%",
  },
  group6: {
    width: "47.47%",
    right: "46.13%",
    left: "6.4%",
  },
  group7: {
    width: "30.4%",
    right: "12.53%",
    left: "57.07%",
  },
  group8: {
    width: "67.47%",
    top: "47.94%",
    right: "26.13%",
    bottom: "47.65%",
    left: "6.4%",
  },
  groupIcon2: {
    height: "25.7%",
    width: "87.2%",
    top: "55.21%",
    right: "6.4%",
    bottom: "19.09%",
    left: "6.4%",
    position: "absolute",
    maxWidth: "100%",
  },
  groupIcon3: {
    height: "17.62%",
    top: "82.38%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  frameIcon1: {
    height: "3.96%",
    width: "7.2%",
    top: "85.1%",
    right: "84%",
    bottom: "10.94%",
    left: "8.8%",
    position: "absolute",
    maxWidth: "100%",
  },
  frameIcon2: {
    height: "3.52%",
    width: "6.4%",
    top: "85.32%",
    right: "68.53%",
    bottom: "11.16%",
    left: "25.07%",
    position: "absolute",
    maxWidth: "100%",
  },
  frameIcon3: {
    width: "8%",
    top: "84.88%",
    right: "51.47%",
    bottom: "10.72%",
    left: "40.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIcon4: {
    right: "36.8%",
    left: "57.6%",
  },
  frameIcon5: {
    right: "22.13%",
    left: "72.27%",
  },
  frameIcon6: {
    height: "2.2%",
    width: "4%",
    top: "85.98%",
    right: "9.07%",
    bottom: "11.82%",
    left: "86.93%",
    position: "absolute",
    maxWidth: "100%",
  },
  groupIcon4: {
    height: "97.65%",
    width: "46.4%",
    right: "53.6%",
    bottom: "2.35%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    top: "0%",
  },
  feedbackcontact: {
    color: Color.colorWhite,
  },
  group9: {
    width: "32.8%",
    top: "93.17%",
    right: "57.6%",
    bottom: "3.89%",
    left: "9.6%",
  },
  vaccinationInformation: {
    flex: 1,
    height: 681,
    overflow: "hidden",
    width: "100%",
  },
});

export default VaccinationInformation;
