import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const OrthopedicClinicLocator = () => {
  return (
    <View style={styles.orthopedicClinicLocator}>
      <Image
        style={[styles.vectorIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/vector50.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group135.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/group144.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame68.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame82.png")}
      />
      <View style={[styles.group, styles.groupPosition1]}>
        <Text style={styles.orthopedicRelatedProblem}>
          Orthopedic Related Problem
        </Text>
      </View>
      <View style={[styles.group1, styles.groupPosition1]}>
        <Text style={[styles.descriptionOfThe, styles.hereTypo]}>
          Description of the orthopedic issue goes here. It
        </Text>
        <Text style={[styles.canIncludeText, styles.hereTypo]}>
          can include text, images, and videos for better
        </Text>
        <Text style={[styles.understanding, styles.hereTypo]}>
          understanding.
        </Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group145.png")}
      />
      <View style={[styles.group2, styles.groupPosition]}>
        <Text style={[styles.descriptionOfThe, styles.hereTypo]}>
          Additional information or video can be added
        </Text>
        <Text style={[styles.here, styles.hereTypo]}>here.</Text>
      </View>
      <View style={[styles.group3, styles.groupPosition1]}>
        <Text style={styles.orthopedicRelatedProblem}>
          Clinic/Hospital Location
        </Text>
      </View>
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group146.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame83.png")}
      />
      <View style={[styles.group4, styles.groupPosition]}>
        <Text style={[styles.descriptionOfThe, styles.hereTypo]}>
          Clinic/Hospital Address: 123 Health Street, City
        </Text>
        <Text style={[styles.here, styles.hereTypo]}>Name, Country</Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group135.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame70.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame71.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame72.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame84.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    height: "7.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  groupPosition1: {
    left: "6.4%",
    position: "absolute",
  },
  hereTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    position: "absolute",
  },
  groupIconLayout: {
    right: "6.4%",
    width: "87.2%",
    height: "20.57%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    height: "4.29%",
    left: "6.4%",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    bottom: "92.96%",
    top: "0%",
  },
  groupIcon1: {
    height: "3.52%",
    width: "17.07%",
    top: "1.76%",
    right: "78.67%",
    bottom: "94.72%",
    left: "4.27%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon: {
    height: "1.76%",
    width: "4.27%",
    top: "2.64%",
    right: "41.33%",
    bottom: "95.6%",
    left: "54.4%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon1: {
    height: "1.54%",
    width: "3.73%",
    top: "2.75%",
    right: "4.27%",
    bottom: "95.71%",
    left: "92%",
    maxWidth: "100%",
    position: "absolute",
  },
  orthopedicRelatedProblem: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group: {
    width: "80.53%",
    top: "9.52%",
    right: "13.07%",
    bottom: "87.18%",
    height: "3.3%",
  },
  descriptionOfThe: {
    top: "0%",
  },
  canIncludeText: {
    top: "32.76%",
  },
  understanding: {
    top: "65.52%",
  },
  group1: {
    height: "6.38%",
    width: "84.8%",
    top: "15.13%",
    right: "8.8%",
    bottom: "78.49%",
  },
  groupIcon2: {
    top: "24.64%",
    bottom: "54.79%",
  },
  here: {
    top: "48.72%",
  },
  group2: {
    width: "80.8%",
    top: "47.91%",
    right: "12.8%",
    bottom: "47.8%",
  },
  group3: {
    width: "67.47%",
    top: "56.38%",
    right: "26.13%",
    bottom: "40.32%",
    height: "3.3%",
  },
  groupIcon3: {
    top: "61.83%",
    bottom: "17.6%",
  },
  frameIcon2: {
    height: "1.65%",
    width: "4%",
    top: "71.34%",
    right: "48%",
    bottom: "27.01%",
    left: "48%",
    maxWidth: "100%",
    position: "absolute",
  },
  group4: {
    width: "82.93%",
    top: "84.32%",
    right: "10.67%",
    bottom: "11.39%",
  },
  groupIcon4: {
    top: "92.96%",
    bottom: "0%",
    height: "7.04%",
  },
  frameIcon3: {
    height: "2.97%",
    width: "7.2%",
    top: "94.99%",
    right: "82.13%",
    bottom: "2.04%",
    left: "10.67%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon4: {
    width: "8%",
    top: "94.83%",
    right: "48.53%",
    bottom: "1.87%",
    left: "43.47%",
    height: "3.3%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon5: {
    height: "2.31%",
    width: "5.6%",
    top: "95.32%",
    right: "30.13%",
    bottom: "2.37%",
    left: "64.27%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon6: {
    height: "2.64%",
    width: "6.4%",
    top: "95.16%",
    right: "10.93%",
    bottom: "2.2%",
    left: "82.67%",
    maxWidth: "100%",
    position: "absolute",
  },
  orthopedicClinicLocator: {
    flex: 1,
    height: 909,
    overflow: "hidden",
    width: "100%",
  },
});

export default OrthopedicClinicLocator;
