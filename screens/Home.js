import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home1}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Image
        style={styles.groupIcon3}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group4.png")}
      />
      <View style={[styles.group, styles.groupLayout2]}>
        <Text style={[styles.available247, styles.insuranceTypo]}>
          Available 24/7
        </Text>
      </View>
      <View style={[styles.group1, styles.groupLayout1]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.chatNow, styles.chatNowTypo]}>Chat Now</Text>
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={[styles.group2, styles.groupLayout]}>
        <Text style={[styles.takeControlOf, styles.takeControlOfTypo]}>
          Take control of your health!
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconPosition7]}
        contentFit="cover"
        source={require("../assets/group5.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconPosition7]}
        contentFit="cover"
        source={require("../assets/group5.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconPosition7]}
        contentFit="cover"
        source={require("../assets/group5.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconPosition7]}
        contentFit="cover"
        source={require("../assets/group6.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconPosition7]}
        contentFit="cover"
        source={require("../assets/group5.png")}
      />
      <View style={styles.group3}>
        <Text style={[styles.monitorYourHealth, styles.takeControlOfTypo]}>
          Monitor your health
        </Text>
      </View>
      <View style={[styles.group4, styles.groupLayout2]}>
        <Text style={[styles.available247, styles.insuranceTypo]}>
          Stay informed
        </Text>
      </View>
      <View style={[styles.group5, styles.groupPosition3]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.getStarted, styles.chatNowTypo]}>Get Started</Text>
      </View>
      <View style={[styles.group6, styles.groupLayout]}>
        <Text style={[styles.takeControlOf, styles.takeControlOfTypo]}>
          Your Health Products
        </Text>
      </View>
      <Image
        style={[styles.groupIcon10, styles.groupIconPosition4]}
        contentFit="cover"
        source={require("../assets/group7.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconPosition3]}
        contentFit="cover"
        source={require("../assets/group8.png")}
      />
      <View style={styles.group7}>
        <Text style={[styles.available247, styles.insuranceTypo]}>Health</Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group9.png")}
      />
      <Image
        style={[styles.groupIcon13, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group10.png")}
      />
      <Image
        style={[styles.groupIcon14, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group9.png")}
      />
      <View style={[styles.group8, styles.groupPosition2]}>
        <Text style={[styles.available247, styles.insuranceTypo]}>Travel</Text>
        <Text style={[styles.insurance, styles.insuranceTypo]}>Insurance</Text>
      </View>
      <Image
        style={[styles.groupIcon15, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group11.png")}
      />
      <View style={[styles.group9, styles.groupPosition1]}>
        <Text style={[styles.available247, styles.insuranceTypo]}>Life</Text>
        <Text style={[styles.insurance, styles.insuranceTypo]}>Insurance</Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon16, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group7.png")}
      />
      <Image
        style={[styles.groupIcon17, styles.groupPosition1]}
        contentFit="cover"
        source={require("../assets/group12.png")}
      />
      <View style={[styles.group10, styles.groupPosition1]}>
        <Text style={[styles.available247, styles.insuranceTypo]}>Contact</Text>
      </View>
      <View style={[styles.group11, styles.groupLayout]}>
        <Text style={[styles.takeControlOf, styles.takeControlOfTypo]}>
          More Options
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon18, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group13.png")}
      />
      <View style={[styles.group12, styles.groupPosition]}>
        <Text style={[styles.available247, styles.insuranceTypo]}>
          Community
        </Text>
      </View>
      <Image
        style={[styles.groupIcon19, styles.groupPosition3]}
        contentFit="cover"
        source={require("../assets/group14.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon20, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group15.png")}
      />
      <View style={[styles.group13, styles.groupPosition]}>
        <Text style={[styles.available247, styles.insuranceTypo]}>Doctor</Text>
      </View>
      <Image
        style={[styles.groupIcon21, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group16.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Image
        style={[styles.groupIcon22, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group17.png")}
      />
      <Image
        style={[styles.groupIcon23, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group18.png")}
      />
      <Image
        style={[styles.groupIcon24, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group19.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout2: {
    width: "21.87%",
    height: "1.69%",
    position: "absolute",
  },
  insuranceTypo: {
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_sm,
    left: "0%",
    position: "absolute",
  },
  groupLayout1: {
    width: "23.47%",
    height: "3%",
  },
  chatNowTypo: {
    color: Color.colorBlack,
    top: "21.88%",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupLayout: {
    height: "2.35%",
    position: "absolute",
  },
  takeControlOfTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIconPosition7: {
    bottom: "72.77%",
    top: "26.67%",
    height: "0.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition3: {
    left: "64.8%",
    position: "absolute",
  },
  groupIconPosition4: {
    bottom: "51.03%",
    top: "43.05%",
    height: "5.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition3: {
    bottom: "52.11%",
    top: "44.13%",
  },
  groupIconPosition2: {
    left: "52.4%",
    width: "42.13%",
    right: "5.47%",
  },
  groupIconLayout: {
    left: "55.47%",
    right: "33.87%",
    width: "10.67%",
    height: "3.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition1: {
    bottom: "43.52%",
    top: "50.56%",
    height: "5.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition2: {
    left: "70.4%",
    right: "14.13%",
    width: "15.47%",
    height: "3.38%",
  },
  groupPosition1: {
    top: "51.83%",
    position: "absolute",
  },
  groupIconPosition: {
    bottom: "28.5%",
    top: "64.08%",
    height: "7.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "26.01%",
    top: "72.3%",
    height: "1.69%",
    position: "absolute",
  },
  frameIconLayout: {
    bottom: "1.88%",
    top: "95.12%",
    width: "8.53%",
    height: "3%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconGroupLayout: {
    height: "3.76%",
    width: "10.67%",
    maxHeight: "100%",
    maxWidth: "100%",
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
    height: "26.48%",
    top: "7.51%",
    bottom: "66.01%",
    left: "5.33%",
    right: "5.33%",
    width: "89.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon1: {
    height: "58.4%",
    top: "36.24%",
    bottom: "5.35%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  groupIcon2: {
    height: "13.05%",
    width: "84.8%",
    top: "8.31%",
    right: "7.6%",
    bottom: "78.64%",
    left: "7.6%",
    position: "absolute",
  },
  groupIcon3: {
    height: "8.92%",
    width: "89.07%",
    top: "81.55%",
    bottom: "9.53%",
    left: "5.47%",
    right: "5.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon4: {
    height: "1.13%",
    width: "3.2%",
    top: "83.29%",
    right: "85.07%",
    bottom: "15.59%",
    left: "11.73%",
    position: "absolute",
  },
  available247: {
    top: "0%",
  },
  group: {
    top: "83%",
    right: "60%",
    bottom: "15.31%",
    left: "18.13%",
  },
  chatNow: {
    left: "17.61%",
  },
  group1: {
    top: "86.38%",
    right: "64.8%",
    bottom: "10.61%",
    left: "11.73%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: "2.25%",
    bottom: "94.74%",
    height: "3%",
    left: "5.33%",
    right: "5.33%",
    width: "89.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  takeControlOf: {
    fontSize: FontSize.size_xl,
  },
  group2: {
    width: "64.8%",
    top: "22.86%",
    right: "23.47%",
    bottom: "74.79%",
    left: "11.73%",
  },
  vectorIcon2: {
    height: "9.39%",
    width: "26.67%",
    bottom: "90.61%",
    right: "73.33%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    top: "0%",
  },
  groupIcon5: {
    width: "14.93%",
    right: "73.33%",
    left: "11.73%",
  },
  groupIcon6: {
    right: "57.87%",
    left: "27.2%",
    width: "14.93%",
  },
  groupIcon7: {
    right: "42.4%",
    left: "42.67%",
    width: "14.93%",
  },
  groupIcon8: {
    width: "14.67%",
    left: "73.6%",
    right: "11.73%",
  },
  groupIcon9: {
    right: "26.93%",
    left: "58.13%",
    width: "14.93%",
  },
  monitorYourHealth: {
    fontSize: FontSize.size_base,
  },
  group3: {
    height: "1.88%",
    width: "37.6%",
    top: "28.83%",
    right: "50.67%",
    bottom: "69.3%",
    left: "11.73%",
    position: "absolute",
  },
  group4: {
    top: "30.8%",
    bottom: "67.51%",
    right: "66.4%",
    left: "11.73%",
  },
  getStarted: {
    left: "12.5%",
  },
  group5: {
    top: "29.11%",
    bottom: "67.89%",
    right: "11.73%",
    width: "23.47%",
    height: "3%",
  },
  group6: {
    width: "49.6%",
    top: "38.45%",
    right: "45.07%",
    bottom: "59.2%",
    left: "5.33%",
  },
  groupIcon10: {
    right: "52.13%",
    width: "42.4%",
    left: "5.47%",
  },
  groupIcon11: {
    right: "80.8%",
    left: "8.53%",
    width: "10.67%",
    height: "3.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  group7: {
    width: "10.4%",
    top: "45.26%",
    bottom: "53.05%",
    left: "23.2%",
    right: "66.4%",
    height: "1.69%",
    position: "absolute",
  },
  groupIcon12: {
    bottom: "51.03%",
    top: "43.05%",
    height: "5.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon13: {
    bottom: "52.11%",
    top: "44.13%",
  },
  groupIcon14: {
    left: "52.4%",
    width: "42.13%",
    right: "5.47%",
  },
  insurance: {
    top: "50%",
  },
  group8: {
    top: "44.32%",
    bottom: "52.3%",
    position: "absolute",
  },
  groupIcon15: {
    top: "51.64%",
    bottom: "44.6%",
  },
  group9: {
    bottom: "44.79%",
    left: "70.4%",
    right: "14.13%",
    width: "15.47%",
    height: "3.38%",
  },
  groupIcon16: {
    right: "52.13%",
    width: "42.4%",
    left: "5.47%",
  },
  groupIcon17: {
    right: "81.33%",
    bottom: "44.41%",
    left: "8%",
    width: "10.67%",
    height: "3.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  group10: {
    width: "12.27%",
    right: "64.27%",
    bottom: "46.48%",
    left: "23.47%",
    height: "1.69%",
  },
  group11: {
    width: "31.47%",
    top: "59.48%",
    right: "63.2%",
    bottom: "38.17%",
    left: "5.33%",
  },
  groupIcon18: {
    left: "52.4%",
    width: "42.13%",
    right: "5.47%",
  },
  group12: {
    width: "18.4%",
    right: "17.33%",
    left: "64.27%",
  },
  groupIcon19: {
    height: "6.01%",
    width: "17.07%",
    top: "64.79%",
    right: "18.13%",
    bottom: "29.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon20: {
    right: "52.13%",
    width: "42.4%",
    left: "5.47%",
  },
  group13: {
    right: "68%",
    left: "21.33%",
    width: "10.67%",
  },
  groupIcon21: {
    height: "5.26%",
    top: "65.16%",
    right: "65.87%",
    bottom: "29.58%",
    left: "19.2%",
    width: "14.93%",
    position: "absolute",
  },
  maskGroupIcon1: {
    height: "2.25%",
    width: "44.8%",
    top: "77%",
    right: "49.87%",
    bottom: "20.75%",
    left: "5.33%",
    position: "absolute",
  },
  groupIcon22: {
    height: "7.51%",
    width: "25.6%",
    top: "82.25%",
    right: "13.6%",
    bottom: "10.23%",
    left: "60.8%",
    position: "absolute",
  },
  groupIcon23: {
    height: "12.02%",
    width: "29.87%",
    top: "8.83%",
    right: "34.93%",
    bottom: "79.15%",
    left: "35.2%",
    position: "absolute",
  },
  groupIcon24: {
    height: "6.48%",
    top: "93.52%",
    left: "0%",
    maxWidth: "100%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  frameIcon: {
    left: "25.07%",
    right: "66.4%",
  },
  frameIcon1: {
    right: "82.13%",
    left: "9.33%",
  },
  frameIcon2: {
    right: "28%",
    left: "63.47%",
  },
  frameIcon3: {
    right: "10.93%",
    left: "80.53%",
  },
  frameIcon4: {
    height: "3.1%",
    width: "8.8%",
    top: "2.39%",
    right: "2.93%",
    bottom: "94.51%",
    left: "88.27%",
    position: "absolute",
  },
  frameIcon5: {
    top: "94.65%",
    right: "44.53%",
    bottom: "1.6%",
    left: "44.8%",
    width: "10.67%",
    position: "absolute",
  },
  home1: {
    flex: 1,
    height: 1065,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
