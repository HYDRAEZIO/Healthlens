import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CardiologyInformation = () => {
  return (
    <View style={styles.cardiologyInformation1}>
      <Image
        style={[styles.vectorIcon, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector35.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group69.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/group114.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.cardiologyInformation, styles.cardiologyTypo]}>
          Cardiology Information
        </Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame53.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group115.png")}
      />
      <View style={[styles.group1, styles.groupPosition3]}>
        <Text
          style={[styles.cardiologyProblems, styles.cardiologyProblemsTypo]}
        >
          Cardiology Problems
        </Text>
      </View>
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group116.png")}
      />
      <View style={[styles.group2, styles.groupPosition2]}>
        <Text style={[styles.cardiologyInformation, styles.cardiologyTypo]}>
          Heart Attack
        </Text>
      </View>
      <View style={[styles.group3, styles.groupPosition1]}>
        <Text style={[styles.aHeartAttack, styles.heartTypo]}>
          A heart attack occurs when the flow of blood to
        </Text>
        <Text style={[styles.theHeartIs, styles.heartTypo]}>
          the heart is blocked.
        </Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group117.png")}
      />
      <View style={[styles.group4, styles.groupPosition]}>
        <Text style={[styles.learnMore, styles.learnMoreTypo]}>Learn More</Text>
      </View>
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group116.png")}
      />
      <View style={[styles.group5, styles.groupPosition2]}>
        <Text style={[styles.cardiologyInformation, styles.cardiologyTypo]}>
          Arrhythmia
        </Text>
      </View>
      <View style={[styles.group6, styles.groupPosition1]}>
        <Text style={[styles.aHeartAttack, styles.heartTypo]}>
          An irregular heartbeat that can be too fast, too
        </Text>
        <Text style={[styles.theHeartIs, styles.heartTypo]}>
          slow, or erratic.
        </Text>
      </View>
      <Image
        style={[styles.groupIcon6, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group118.png")}
      />
      <View style={[styles.group7, styles.groupPosition]}>
        <Text style={[styles.learnMore, styles.learnMoreTypo]}>Learn More</Text>
      </View>
      <Image
        style={[styles.groupIcon7, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group116.png")}
      />
      <View style={[styles.group8, styles.groupPosition2]}>
        <Text style={[styles.cardiologyInformation, styles.cardiologyTypo]}>
          Heart Failure
        </Text>
      </View>
      <View style={[styles.group9, styles.groupPosition1]}>
        <Text style={[styles.aHeartAttack, styles.heartTypo]}>
          When the heart can't pump enough blood to
        </Text>
        <Text style={[styles.theHeartIs, styles.heartTypo]}>
          meet the body's needs.
        </Text>
      </View>
      <Image
        style={[styles.groupIcon8, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group119.png")}
      />
      <View style={[styles.group10, styles.groupPosition]}>
        <Text style={[styles.learnMore, styles.learnMoreTypo]}>Learn More</Text>
      </View>
      <View style={[styles.group11, styles.groupPosition3]}>
        <Text style={[styles.clinichospitalLocations, styles.learnMoreTypo]}>
          Clinic/Hospital Locations
        </Text>
      </View>
      <Image
        style={styles.groupIcon9}
        contentFit="cover"
        source={require("../assets/group120.png")}
      />
      <View style={styles.group12}>
        <Image
          style={[styles.vectorIcon, styles.frameIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector36.png")}
        />
        <Text style={[styles.hospitalLocation, styles.learnMoreTypo]}>
          Hospital Location
        </Text>
      </View>
      <Image
        style={[styles.groupIcon10, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group121.png")}
      />
      <View style={[styles.group13, styles.group13Layout]}>
        <Text style={[styles.learnMore, styles.learnMoreTypo]}>
          Get Directions
        </Text>
      </View>
      <Image
        style={[styles.groupIcon11, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/group122.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame54.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame55.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame56.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame57.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.group13Layout]}
        contentFit="cover"
        source={require("../assets/frame58.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/frame59.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconPosition1: {
    bottom: "93.82%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  cardiologyTypo: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  groupPosition3: {
    left: "6.4%",
    height: "2.41%",
    position: "absolute",
  },
  cardiologyProblemsTypo: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    left: "0%",
    top: "0%",
  },
  groupIconLayout: {
    right: "6.4%",
    height: "15.06%",
    width: "87.2%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition2: {
    left: "10.67%",
    height: "2.22%",
    position: "absolute",
  },
  groupPosition1: {
    height: "3.28%",
    left: "10.67%",
    position: "absolute",
  },
  heartTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    position: "absolute",
  },
  groupIconPosition: {
    right: "10.67%",
    width: "89.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    left: "40.8%",
    right: "39.2%",
    width: "20%",
    height: "1.93%",
    position: "absolute",
  },
  learnMoreTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  iconPosition: {
    right: "9.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  group13Layout: {
    height: "1.93%",
    position: "absolute",
  },
  frameIconLayout1: {
    bottom: "1.79%",
    top: "95.99%",
    width: "6.13%",
    height: "2.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    bottom: "1.69%",
    top: "95.9%",
    width: "6.67%",
    height: "2.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  groupIcon: {
    height: "6.18%",
    top: "0%",
  },
  groupIcon1: {
    height: "3.09%",
    width: "8.53%",
    top: "1.54%",
    right: "87.2%",
    bottom: "95.37%",
    left: "4.27%",
    position: "absolute",
  },
  cardiologyInformation: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
  },
  group: {
    width: "49.6%",
    top: "1.83%",
    right: "22.4%",
    bottom: "95.95%",
    left: "28%",
    height: "2.22%",
    position: "absolute",
  },
  frameIcon: {
    height: "1.54%",
    width: "4.27%",
    top: "2.32%",
    right: "4.27%",
    bottom: "96.14%",
    left: "91.47%",
    position: "absolute",
  },
  groupIcon2: {
    height: "0.1%",
    top: "6.08%",
  },
  cardiologyProblems: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  group1: {
    width: "49.33%",
    top: "7.87%",
    right: "44.27%",
    bottom: "89.72%",
  },
  groupIcon3: {
    top: "12.07%",
    bottom: "72.88%",
  },
  group2: {
    width: "26.67%",
    top: "13.71%",
    right: "62.67%",
    bottom: "84.07%",
  },
  aHeartAttack: {
    top: "0%",
  },
  theHeartIs: {
    top: "47.06%",
  },
  group3: {
    width: "73.07%",
    top: "17.08%",
    right: "16.27%",
    bottom: "79.63%",
  },
  groupIcon4: {
    height: "25.58%",
    bottom: "74.42%",
  },
  learnMore: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    left: "0%",
    top: "0%",
  },
  group4: {
    top: "22.64%",
    bottom: "75.43%",
  },
  groupIcon5: {
    top: "28.67%",
    bottom: "56.27%",
  },
  group5: {
    width: "24.53%",
    top: "30.31%",
    right: "64.8%",
    bottom: "67.47%",
  },
  group6: {
    width: "71.73%",
    top: "33.69%",
    right: "17.6%",
    bottom: "63.03%",
  },
  groupIcon6: {
    height: "42.18%",
    bottom: "57.82%",
  },
  group7: {
    top: "39.24%",
    bottom: "58.83%",
  },
  groupIcon7: {
    top: "45.27%",
    bottom: "39.67%",
  },
  group8: {
    width: "27.73%",
    top: "46.91%",
    right: "61.6%",
    bottom: "50.87%",
  },
  group9: {
    width: "68.8%",
    top: "50.29%",
    right: "20.53%",
    bottom: "46.43%",
  },
  groupIcon8: {
    height: "58.78%",
    bottom: "41.22%",
  },
  group10: {
    top: "55.84%",
    bottom: "42.23%",
  },
  clinichospitalLocations: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    left: "0%",
    top: "0%",
  },
  group11: {
    width: "58.4%",
    top: "63.08%",
    right: "35.2%",
    bottom: "34.51%",
  },
  groupIcon9: {
    height: "21.04%",
    top: "71.91%",
    right: "5.6%",
    bottom: "7.05%",
    left: "7.2%",
    width: "87.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hospitalLocation: {
    top: "25%",
    left: "27.76%",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  group12: {
    height: "3.86%",
    width: "70.13%",
    top: "61.68%",
    right: "21.87%",
    bottom: "34.46%",
    left: "8%",
    position: "absolute",
  },
  groupIcon10: {
    height: "70.95%",
    width: "90.93%",
    bottom: "29.05%",
    left: "0%",
    top: "0%",
  },
  group13: {
    width: "25.07%",
    top: "68%",
    right: "12.8%",
    bottom: "30.07%",
    left: "62.13%",
  },
  groupIcon11: {
    height: "5.79%",
    top: "94.21%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  frameIcon1: {
    right: "85.07%",
    left: "8.8%",
  },
  frameIcon2: {
    right: "69.6%",
    left: "24.27%",
  },
  frameIcon3: {
    right: "53.6%",
    left: "39.73%",
  },
  frameIcon4: {
    right: "37.87%",
    left: "55.47%",
  },
  frameIcon5: {
    width: "5.33%",
    top: "96.14%",
    right: "23.2%",
    bottom: "1.93%",
    left: "71.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIcon6: {
    height: "1.74%",
    width: "4.8%",
    top: "96.24%",
    bottom: "2.03%",
    left: "86.13%",
  },
  cardiologyInformation1: {
    flex: 1,
    height: 1036,
    overflow: "hidden",
    width: "100%",
  },
});

export default CardiologyInformation;
