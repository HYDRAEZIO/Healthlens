import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const NeuroHealth = () => {
  return (
    <View style={styles.neuroHealth}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector47.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group128.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group129.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.neuroHealth1, styles.migrainePosition]}>
          Neuro Health
        </Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/frame68.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/frame69.png")}
      />
      <View style={[styles.group1, styles.groupPosition6]}>
        <Text style={[styles.neuroHealth1, styles.migrainePosition]}>
          Neurological Disorders
        </Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group130.png")}
      />
      <View style={[styles.group2, styles.groupPosition5]}>
        <Text style={[styles.migraine, styles.migrainePosition]}>Migraine</Text>
      </View>
      <View style={[styles.group3, styles.groupPosition4]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          A common neurological condition characterized
        </Text>
        <Text
          style={[styles.byRecurrentHeadaches, styles.aCommonNeurologicalTypo]}
        >
          by recurrent headaches.
        </Text>
      </View>
      <View style={[styles.group4, styles.groupPosition3]}>
        <Text style={[styles.migraine, styles.migrainePosition]}>
          Alzheimer's Disease
        </Text>
      </View>
      <View style={[styles.group5, styles.groupPosition4]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          A progressive disorder that causes brain cells to
        </Text>
        <Text
          style={[styles.byRecurrentHeadaches, styles.aCommonNeurologicalTypo]}
        >
          degenerate and die.
        </Text>
      </View>
      <View style={[styles.group6, styles.groupPosition3]}>
        <Text style={[styles.migraine, styles.migrainePosition]}>
          Parkinson's Disease
        </Text>
      </View>
      <View style={[styles.group7, styles.groupPosition4]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          A neurodegenerative disorder that affects
        </Text>
        <Text
          style={[styles.byRecurrentHeadaches, styles.aCommonNeurologicalTypo]}
        >
          movement.
        </Text>
      </View>
      <View style={[styles.group8, styles.groupPosition6]}>
        <Text style={[styles.neuroHealth1, styles.migrainePosition]}>
          Nearby Clinics/Hospitals
        </Text>
      </View>
      <Image
        style={[styles.groupIcon3, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group131.png")}
      />
      <View style={[styles.group9, styles.groupPosition5]}>
        <Text style={[styles.migraine, styles.migrainePosition]}>
          City General Hospital
        </Text>
      </View>
      <View style={[styles.group10, styles.groupPosition2]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          123 Main Street, City, 12345
        </Text>
      </View>
      <View style={[styles.group11, styles.groupPosition1]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          Phone: 555-123-4567
        </Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group132.png")}
      />
      <View style={[styles.group12, styles.groupPosition]}>
        <Text style={[styles.directions, styles.migrainePosition]}>
          Directions
        </Text>
      </View>
      <View style={[styles.group13, styles.groupPosition5]}>
        <Text style={[styles.migraine, styles.migrainePosition]}>
          Central Neurology Clinic
        </Text>
      </View>
      <View style={[styles.group14, styles.groupPosition2]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          456 Elm Avenue, Town, 54321
        </Text>
      </View>
      <View style={[styles.group15, styles.groupPosition1]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          Phone: 555-987-6543
        </Text>
      </View>
      <Image
        style={[styles.groupIcon5, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group133.png")}
      />
      <View style={[styles.group16, styles.groupPosition]}>
        <Text style={[styles.directions, styles.migrainePosition]}>
          Directions
        </Text>
      </View>
      <View style={[styles.group17, styles.groupPosition5]}>
        <Text style={[styles.migraine, styles.migrainePosition]}>
          Sunset Medical Center
        </Text>
      </View>
      <View style={[styles.group18, styles.groupPosition2]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          789 Oak Lane, Village, 67890
        </Text>
      </View>
      <View style={[styles.group19, styles.groupPosition1]}>
        <Text
          style={[styles.aCommonNeurological, styles.aCommonNeurologicalTypo]}
        >
          Phone: 555-234-5678
        </Text>
      </View>
      <Image
        style={[styles.groupIcon6, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group134.png")}
      />
      <View style={[styles.group20, styles.groupPosition]}>
        <Text style={[styles.directions, styles.migrainePosition]}>
          Directions
        </Text>
      </View>
      <Image
        style={[styles.groupIcon7, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group135.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/frame70.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame71.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/frame72.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame73.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  migrainePosition: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition6: {
    left: "6.4%",
    height: "2.93%",
    position: "absolute",
  },
  groupIconPosition1: {
    right: "6.4%",
    width: "87.2%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition5: {
    left: "10.67%",
    height: "2.25%",
    position: "absolute",
  },
  groupPosition4: {
    height: "3.32%",
    left: "10.67%",
    position: "absolute",
  },
  aCommonNeurologicalTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    position: "absolute",
  },
  groupPosition3: {
    right: "47.2%",
    width: "42.13%",
    left: "10.67%",
    height: "2.25%",
    position: "absolute",
  },
  groupPosition2: {
    height: "1.76%",
    left: "10.67%",
    position: "absolute",
  },
  groupPosition1: {
    right: "56.53%",
    width: "32.8%",
    height: "1.76%",
    left: "10.67%",
    position: "absolute",
  },
  groupIconPosition: {
    right: "66.13%",
    width: "33.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    left: "13.87%",
    right: "68%",
    width: "18.13%",
    height: "1.95%",
    position: "absolute",
  },
  frameIconLayout: {
    bottom: "1.66%",
    top: "95.41%",
    width: "8%",
    height: "2.93%",
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
    position: "absolute",
    width: "100%",
    bottom: "0%",
    top: "0%",
  },
  groupIcon: {
    height: "7.03%",
    bottom: "92.97%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  groupIcon1: {
    height: "3.91%",
    width: "10.67%",
    top: "1.56%",
    right: "85.07%",
    bottom: "94.53%",
    left: "4.27%",
    maxWidth: "100%",
    position: "absolute",
  },
  neuroHealth1: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_400,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
  },
  group: {
    width: "37.6%",
    top: "1.81%",
    right: "35.73%",
    bottom: "95.26%",
    left: "26.67%",
    height: "2.93%",
    position: "absolute",
  },
  frameIcon: {
    height: "1.56%",
    width: "4.27%",
    top: "2.73%",
    right: "20%",
    bottom: "95.7%",
    left: "75.73%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon1: {
    height: "1.37%",
    width: "3.73%",
    top: "2.83%",
    right: "4.53%",
    bottom: "95.8%",
    left: "91.73%",
    maxWidth: "100%",
    position: "absolute",
  },
  group1: {
    top: "8.45%",
    right: "29.33%",
    bottom: "88.62%",
    width: "64.27%",
  },
  groupIcon2: {
    height: "28.52%",
    top: "13.28%",
    bottom: "58.2%",
  },
  migraine: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_400,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
  },
  group2: {
    width: "18.67%",
    top: "14.94%",
    right: "70.67%",
    bottom: "82.81%",
  },
  aCommonNeurological: {
    top: "0%",
  },
  byRecurrentHeadaches: {
    top: "47.06%",
  },
  group3: {
    width: "74.67%",
    top: "18.36%",
    right: "14.67%",
    bottom: "78.32%",
  },
  group4: {
    top: "23.93%",
    bottom: "73.83%",
  },
  group5: {
    width: "73.6%",
    top: "27.34%",
    right: "15.73%",
    bottom: "69.34%",
  },
  group6: {
    top: "32.91%",
    bottom: "64.84%",
  },
  group7: {
    top: "36.33%",
    right: "25.07%",
    bottom: "60.35%",
    width: "64.27%",
  },
  group8: {
    width: "69.07%",
    top: "43.99%",
    right: "24.53%",
    bottom: "53.08%",
  },
  groupIcon3: {
    height: "42.58%",
    top: "48.83%",
    bottom: "8.59%",
  },
  group9: {
    width: "44.8%",
    top: "50.49%",
    right: "44.53%",
    bottom: "47.27%",
  },
  group10: {
    width: "42.67%",
    top: "53.91%",
    right: "46.67%",
    bottom: "44.34%",
  },
  group11: {
    top: "55.86%",
    bottom: "42.38%",
  },
  groupIcon4: {
    height: "62.5%",
    bottom: "37.5%",
  },
  directions: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
  },
  group12: {
    top: "59.52%",
    bottom: "38.53%",
  },
  group13: {
    width: "51.47%",
    top: "64.16%",
    right: "37.87%",
    bottom: "33.59%",
  },
  group14: {
    width: "45.87%",
    top: "67.58%",
    right: "43.47%",
    bottom: "30.66%",
  },
  group15: {
    top: "69.53%",
    bottom: "28.71%",
  },
  groupIcon5: {
    height: "76.17%",
    bottom: "23.83%",
  },
  group16: {
    top: "73.19%",
    bottom: "24.85%",
  },
  group17: {
    width: "47.2%",
    top: "77.83%",
    right: "42.13%",
    bottom: "19.92%",
  },
  group18: {
    width: "44%",
    top: "81.25%",
    right: "45.33%",
    bottom: "16.99%",
  },
  group19: {
    top: "83.2%",
    bottom: "15.04%",
  },
  groupIcon6: {
    height: "89.84%",
    bottom: "10.16%",
  },
  group20: {
    top: "86.87%",
    bottom: "11.18%",
  },
  groupIcon7: {
    height: "6.25%",
    top: "93.75%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
  },
  frameIcon2: {
    height: "2.64%",
    width: "7.2%",
    top: "95.56%",
    right: "82.4%",
    bottom: "1.81%",
    left: "10.4%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon3: {
    right: "49.33%",
    left: "42.67%",
  },
  frameIcon4: {
    height: "2.05%",
    width: "5.6%",
    top: "95.85%",
    right: "31.2%",
    bottom: "2.1%",
    left: "63.2%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon5: {
    right: "10.67%",
    left: "81.33%",
  },
  neuroHealth: {
    flex: 1,
    height: 1024,
    overflow: "hidden",
    width: "100%",
  },
});

export default NeuroHealth;
