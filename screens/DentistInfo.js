import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View ,Linking ,TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize ,ButtonSize} from "../GlobalStyles";

const DentistInfo = () => {
  return (
    <View style={styles.dentistInfo}>
      <Image
        style={[styles.vectorIcon, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector49.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group135.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/group140.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame78.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame68.png")}
      />
      <View style={[styles.group, styles.groupPosition2]}>
        <Text style={[styles.dentistRelatedProblems, styles.painInOrPosition]}>
          Dentist Related Problems
        </Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group141.png")}
      />
      <View style={[styles.group1, styles.groupPosition1]}>
        <Text style={[styles.toothache, styles.painInOrPosition]}>
          Toothache
        </Text>
      </View>
      <View style={[styles.group2, styles.groupPosition]}>
        <Text style={[styles.painInOr, styles.painInOrPosition]}>
          Pain in or around a tooth
        </Text>
      </View>
      <Image
        style={[styles.frameIcon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/frame79.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group141.png")}
      />
      <View style={[styles.group3, styles.groupPosition1]}>
        <Text style={[styles.toothache, styles.painInOrPosition]}>Cavity</Text>
      </View>
      <View style={[styles.group4, styles.groupPosition]}>
        <Text style={[styles.painInOr, styles.painInOrPosition]}>
          Decay that causes a hole in the tooth
        </Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group141.png")}
      />
      <View style={[styles.group5, styles.groupPosition1]}>
        <Text style={[styles.toothache, styles.painInOrPosition]}>
          Gum Disease
        </Text>
      </View>
      <View style={[styles.group6, styles.groupPosition]}>
        <Text style={[styles.painInOr, styles.painInOrPosition]}>
          Inflammation affecting the gums
        </Text>
      </View>
      <Image
        style={[styles.frameIcon3, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame80.png")}
      />
      <View style={[styles.group7, styles.groupPosition2]}>
        <Text style={[styles.dentistRelatedProblems, styles.painInOrPosition]}>
          Clinic/Hospital Locations
        </Text>
      </View>
      <Image
        style={[styles.groupIcon5, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group142.png")}
      />
      <View style={[styles.group8, styles.groupPosition1]}>
        <Text style={[styles.toothache, styles.painInOrPosition]}>
          Dental Care Clinic
        </Text>
      </View>
      <View style={[styles.group9, styles.groupPosition]}>
        <Text style={[styles.painInOr, styles.painInOrPosition]}>
          123 Main Street, City, Country
        </Text>
      </View>
      <TouchableOpacity
        style={ButtonSize}
          onPress={() => Linking.openURL("http://maps.apple.com/?q=Dentist")}
      ></TouchableOpacity>
      <Image
        style={[styles.groupIcon6, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group143.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group135.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame70.png")}
      />
      <Image
        style={styles.frameIcon5}
        contentFit="cover"
        source={require("../assets/frame71.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame72.png")}
      />
      <Image
        style={[styles.frameIcon7, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame81.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    height: "7.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  frameIconLayout1: {
    width: "3.73%",
    height: "1.67%",
  },
  frameIconLayout: {
    width: "4.27%",
    height: "1.91%",
  },
  groupPosition2: {
    left: "6.4%",
    height: "3.59%",
    position: "absolute",
  },
  painInOrPosition: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIconPosition: {
    right: "6.4%",
    width: "87.2%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    height: "2.75%",
    left: "10.67%",
    position: "absolute",
  },
  groupPosition: {
    height: "2.15%",
    left: "10.67%",
    position: "absolute",
  },
  iconPosition: {
    right: "10.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconPosition: {
    right: "10.93%",
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
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    bottom: "92.34%",
    height: "7.66%",
    top: "0%",
  },
  groupIcon1: {
    height: "3.83%",
    width: "8.53%",
    top: "1.91%",
    right: "87.2%",
    bottom: "94.26%",
    left: "4.27%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon: {
    top: "2.99%",
    right: "46.13%",
    bottom: "95.33%",
    left: "50.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon1: {
    top: "2.87%",
    right: "4.27%",
    bottom: "95.22%",
    left: "91.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dentistRelatedProblems: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
  },
  group: {
    width: "71.73%",
    top: "9.39%",
    right: "21.87%",
    bottom: "87.02%",
  },
  groupIcon2: {
    top: "15.31%",
    bottom: "75.12%",
    height: "9.57%",
    right: "6.4%",
    width: "87.2%",
  },
  toothache: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
  },
  group1: {
    width: "22.13%",
    top: "17.34%",
    right: "67.2%",
    bottom: "79.9%",
    left: "10.67%",
  },
  painInOr: {
    fontSize: FontSize.size_sm,
  },
  group2: {
    width: "38.67%",
    top: "20.57%",
    right: "50.67%",
    bottom: "77.27%",
  },
  frameIcon2: {
    top: "19.26%",
    bottom: "79.07%",
    left: "85.6%",
    width: "3.73%",
    height: "1.67%",
  },
  groupIcon3: {
    top: "26.79%",
    bottom: "63.64%",
    height: "9.57%",
    right: "6.4%",
    width: "87.2%",
  },
  group3: {
    width: "13.6%",
    top: "28.83%",
    right: "75.73%",
    bottom: "68.42%",
    left: "10.67%",
  },
  group4: {
    width: "57.07%",
    top: "32.06%",
    right: "32.27%",
    bottom: "65.79%",
  },
  groupIcon4: {
    top: "38.28%",
    bottom: "52.15%",
    height: "9.57%",
    right: "6.4%",
    width: "87.2%",
  },
  group5: {
    width: "27.2%",
    top: "40.31%",
    right: "62.13%",
    bottom: "56.94%",
    left: "10.67%",
  },
  group6: {
    width: "50.93%",
    top: "43.54%",
    right: "38.4%",
    bottom: "54.31%",
  },
  frameIcon3: {
    top: "42.11%",
    bottom: "55.98%",
    left: "84.8%",
    width: "4.27%",
    height: "1.91%",
  },
  group7: {
    width: "70.13%",
    top: "49.58%",
    right: "23.47%",
    bottom: "46.83%",
  },
  groupIcon5: {
    height: "35.05%",
    top: "55.5%",
    bottom: "9.45%",
  },
  group8: {
    width: "37.33%",
    top: "57.54%",
    right: "52%",
    bottom: "39.71%",
    left: "10.67%",
  },
  group9: {
    width: "46.13%",
    top: "60.77%",
    right: "43.2%",
    bottom: "37.08%",
  },
  group10: {
    width: "34.4%",
    top: "64.11%",
    right: "54.93%",
    bottom: "33.73%",
  },
  groupIcon6: {
    height: "20.22%",
    width: "78.67%",
    top: "68.42%",
    bottom: "11.36%",
    left: "10.67%",
  },
  groupIcon7: {
    top: "92.34%",
    bottom: "0%",
    height: "7.66%",
  },
  frameIcon4: {
    height: "3.23%",
    width: "7.2%",
    top: "94.56%",
    right: "82.13%",
    bottom: "2.21%",
    left: "10.67%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon5: {
    width: "8%",
    top: "94.38%",
    right: "48.53%",
    bottom: "2.03%",
    left: "43.47%",
    height: "3.59%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon6: {
    height: "2.51%",
    width: "5.6%",
    top: "94.92%",
    right: "30.13%",
    bottom: "2.57%",
    left: "64.27%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameIcon7: {
    height: "2.87%",
    width: "6.4%",
    top: "94.74%",
    bottom: "2.39%",
    left: "82.67%",
  },
  dentistInfo: {
    flex: 1,
    height: 836,
    overflow: "hidden",
    width: "100%",
  },
});

export default DentistInfo;
