import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile = memo(() => {
  return (
    <View style={styles.profile1}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group47.png")}
      />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group5.png")}
      />
      <View style={styles.group}>
        <Text style={styles.samanthajohnsonhealthconnect}>
          samanthajohnson@healthconnect.com
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.group1, styles.groupPosition3]}>
        <Text style={[styles.healthData, styles.healthDataTypo]}>
          Health Data
        </Text>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group48.png")}
      />
      <Image
        style={styles.groupIcon2}
        contentFit="cover"
        source={require("../assets/group49.png")}
      />
      <View style={[styles.group2, styles.groupPosition2]}>
        <Text style={[styles.manageNotifications, styles.healthDataTypo]}>
          Manage Notifications
        </Text>
      </View>
      <View style={[styles.group3, styles.group3Position]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Text style={[styles.contact, styles.logOutTypo]}>Contact</Text>
      </View>
      <View style={styles.group4}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Text style={[styles.logOut, styles.logOutTypo]}>Log out</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.group5, styles.groupPosition3]}>
        <Text style={[styles.healthData, styles.healthDataTypo]}>
          Share App
        </Text>
      </View>
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group48.png")}
      />
      <View style={[styles.group6, styles.groupPosition2]}>
        <Text style={[styles.manageNotifications, styles.healthDataTypo]}>
          Invite Contacts
        </Text>
      </View>
      <View style={styles.group7}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Text style={[styles.invite, styles.logOutTypo]}>Invite</Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout1]}
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
        style={styles.frameIcon2}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.group8Position]}
        contentFit="cover"
        source={require("../assets/frame11.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group50.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <View style={[styles.group8, styles.group8Position]}>
        <Image
          style={[styles.vectorIcon, styles.groupIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
        <Text style={[styles.change, styles.logOutTypo]}>Change</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  groupIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition3: {
    left: "7.2%",
    height: "2.76%",
    position: "absolute",
  },
  healthDataTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIconLayout: {
    right: "7.47%",
    height: "8.91%",
    width: "85.33%",
    left: "7.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition2: {
    left: "12.53%",
    height: "3.07%",
    position: "absolute",
  },
  group3Position: {
    left: "9.33%",
    position: "absolute",
  },
  logOutTypo: {
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  frameIconLayout: {
    bottom: "3.07%",
    top: "92.01%",
    width: "8.53%",
    height: "4.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  group8Position: {
    right: "10.93%",
    position: "absolute",
  },
  iconLayout: {
    height: "6.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "100%",
    left: "0%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
  },
  groupIcon: {
    height: "16.59%",
    width: "29.33%",
    top: "8.29%",
    right: "35.2%",
    bottom: "75.12%",
    left: "35.47%",
  },
  maskGroupIcon: {
    width: "87.47%",
    top: "27.19%",
    right: "6.13%",
    bottom: "66.36%",
    left: "6.4%",
    height: "6.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  samanthajohnsonhealthconnect: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group: {
    height: "2.3%",
    width: "52.8%",
    top: "33.56%",
    right: "23.73%",
    bottom: "64.13%",
    left: "23.47%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "15.36%",
    width: "26.67%",
    bottom: "84.64%",
    right: "73.33%",
    left: "0%",
    maxWidth: "100%",
    top: "0%",
  },
  healthData: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
  },
  group1: {
    width: "19.47%",
    top: "47.47%",
    bottom: "49.77%",
    right: "73.33%",
  },
  groupIcon1: {
    top: "50.84%",
    bottom: "40.25%",
  },
  groupIcon2: {
    top: "53.76%",
    bottom: "43.16%",
    left: "76.53%",
    right: "12.8%",
    height: "3.07%",
    width: "10.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  manageNotifications: {
    fontSize: FontSize.size_base,
  },
  group2: {
    width: "39.73%",
    top: "53.69%",
    right: "47.73%",
    bottom: "43.24%",
  },
  contact: {
    left: "34%",
    top: "28.57%",
    color: Color.colorBlack,
    fontFamily: FontFamily.sourceSansPro,
  },
  group3: {
    width: "40%",
    right: "50.67%",
    bottom: "55.61%",
    top: "37.94%",
    height: "6.45%",
  },
  logOut: {
    left: "42.81%",
    top: "28.57%",
    color: Color.colorBlack,
    fontFamily: FontFamily.sourceSansPro,
  },
  group4: {
    top: "80.65%",
    right: "8.27%",
    bottom: "12.9%",
    width: "85.33%",
    left: "6.4%",
    height: "6.45%",
    position: "absolute",
  },
  group5: {
    width: "16.8%",
    top: "62.83%",
    right: "76%",
    bottom: "34.41%",
  },
  groupIcon3: {
    top: "66.21%",
    bottom: "24.88%",
  },
  group6: {
    width: "28.53%",
    top: "69.05%",
    right: "58.93%",
    bottom: "27.88%",
  },
  invite: {
    top: "21.88%",
    left: "32.52%",
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorBlack,
  },
  group7: {
    width: "27.47%",
    top: "68.2%",
    bottom: "26.88%",
    left: "59.73%",
    height: "4.92%",
    right: "12.8%",
    position: "absolute",
  },
  groupIcon4: {
    height: "10.6%",
    top: "89.4%",
    left: "0%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  frameIcon: {
    right: "65.07%",
    left: "26.4%",
    position: "absolute",
  },
  frameIcon1: {
    right: "82.13%",
    left: "9.33%",
    position: "absolute",
  },
  frameIcon2: {
    top: "92.32%",
    right: "27.47%",
    bottom: "2.76%",
    left: "64%",
    width: "8.53%",
    height: "4.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon3: {
    left: "80.53%",
    bottom: "3.07%",
    top: "92.01%",
    width: "8.53%",
    height: "4.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon5: {
    width: "9.07%",
    top: "6.61%",
    right: "87.47%",
    bottom: "87.25%",
    left: "3.47%",
  },
  frameIcon4: {
    top: "91.4%",
    right: "44.53%",
    bottom: "2.46%",
    left: "44.8%",
    width: "10.67%",
    height: "6.14%",
  },
  change: {
    top: "27.38%",
    left: "33.33%",
    fontFamily: FontFamily.robotoBold,
  },
  group8: {
    width: "36.8%",
    left: "52.27%",
    bottom: "55.61%",
    top: "37.94%",
    height: "6.45%",
  },
  profile1: {
    width: 375,
    height: 651,
    overflow: "hidden",
  },
});

export default Profile;
