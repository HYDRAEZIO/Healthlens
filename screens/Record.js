import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Record = () => {
  return (
    <View style={styles.record1}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.profile, styles.profilePosition]}>Profile</Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/frame12.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group58.png")}
      />
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame13.png")}
      />
      <View style={[styles.group1, styles.groupPosition2]}>
        <Text style={[styles.johnDoe, styles.profilePosition]}>John Doe</Text>
      </View>
      <View style={styles.group2}>
        <Text style={[styles.healthId123456, styles.textTypo]}>
          Health ID: 123456
        </Text>
      </View>
      <View style={[styles.group3, styles.groupPosition1]}>
        <Text style={[styles.options, styles.logOutTypo]}>Options</Text>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group59.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group59.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group59.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group59.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group60.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group61.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group62.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group63.png")}
      />
      <View style={styles.group4}>
        <Text style={[styles.trackYourProgress, styles.logOutTypo]}>
          Track your progress!
        </Text>
      </View>
      <View style={[styles.group5, styles.groupLayout]}>
        <Text style={[styles.inviteAFriend, styles.inviteTypo]}>
          Invite a friend to join and get rewards!
        </Text>
      </View>
      <View style={[styles.group6, styles.groupPosition2]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/vector18.png")}
        />
        <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
      </View>
      <View style={[styles.group7, styles.groupLayout]}>
        <Text style={[styles.inviteAFriend, styles.inviteTypo]}>
          Learn more
        </Text>
      </View>
      <View style={[styles.group8, styles.groupIconPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
        <Text style={[styles.logOut, styles.logOutTypo]}>Log out</Text>
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <View style={[styles.group9, styles.groupPosition]}>
        <Text style={[styles.prescriptions, styles.textTypo]}>
          Prescriptions
        </Text>
      </View>
      <View style={[styles.group10, styles.groupPosition]}>
        <Text style={[styles.prescriptions, styles.textTypo]}>Schedule</Text>
        <Text style={[styles.text, styles.textTypo]} />
      </View>
      <View style={[styles.group11, styles.groupPosition]}>
        <Text style={[styles.prescriptions, styles.textTypo]}>Vision</Text>
      </View>
      <Image
        style={[styles.groupIcon9, styles.groupPosition1]}
        contentFit="cover"
        source={require("../assets/group64.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profilePosition: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition2: {
    right: "50.4%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    position: "absolute",
  },
  groupPosition1: {
    left: "6.4%",
    position: "absolute",
  },
  logOutTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  groupIconPosition: {
    width: "87.2%",
    left: "6.4%",
    right: "6.4%",
    position: "absolute",
  },
  groupIconLayout: {
    right: "82.93%",
    width: "10.67%",
    height: "5.25%",
    left: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: "1.97%",
    position: "absolute",
  },
  inviteTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  frameIconLayout: {
    left: "90.4%",
    width: "3.2%",
    height: "1.57%",
    right: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    left: "21.33%",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
  },
  profile: {
    fontSize: FontSize.size_5xl,
    color: "#15191b",
  },
  group: {
    height: "3.94%",
    width: "17.6%",
    top: "4%",
    right: "66.4%",
    bottom: "92.06%",
    left: "16%",
    position: "absolute",
  },
  frameIcon: {
    width: "4.8%",
    top: "4.72%",
    right: "88.53%",
    bottom: "92.91%",
    left: "6.67%",
    height: "2.36%",
    position: "absolute",
  },
  groupIcon: {
    height: "3.54%",
    width: "7.2%",
    top: "4.92%",
    right: "3.87%",
    bottom: "91.54%",
    left: "88.93%",
    position: "absolute",
  },
  frameIcon1: {
    height: "2.1%",
    width: "4.27%",
    top: "17.45%",
    bottom: "80.45%",
    left: "89.33%",
    right: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  johnDoe: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_400,
  },
  group1: {
    height: "3.28%",
    width: "21.33%",
    top: "15.16%",
    bottom: "81.56%",
    left: "28.27%",
  },
  healthId123456: {
    color: "#838485",
    top: "0%",
    fontSize: FontSize.size_sm,
  },
  group2: {
    width: "27.2%",
    top: "19.29%",
    right: "45.07%",
    bottom: "78.35%",
    left: "27.73%",
    height: "2.36%",
    position: "absolute",
  },
  options: {
    color: Color.colorGray_400,
    left: "0%",
    top: "0%",
  },
  group3: {
    width: "14.13%",
    top: "28.87%",
    right: "79.47%",
    bottom: "68.5%",
    height: "2.62%",
  },
  groupIcon1: {
    top: "33.6%",
    bottom: "66.14%",
    height: "0.26%",
    width: "87.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon2: {
    top: "42.26%",
    bottom: "57.48%",
    height: "0.26%",
    width: "87.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon3: {
    top: "50.92%",
    bottom: "48.82%",
    height: "0.26%",
    width: "87.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon4: {
    top: "59.58%",
    bottom: "40.16%",
    height: "0.26%",
    width: "87.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "13.12%",
    width: "26.67%",
    right: "73.33%",
    bottom: "86.88%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupIcon5: {
    top: "35.43%",
    bottom: "59.32%",
  },
  groupIcon6: {
    top: "44.09%",
    bottom: "50.66%",
  },
  groupIcon7: {
    top: "52.76%",
    bottom: "41.99%",
  },
  groupIcon8: {
    height: "21.26%",
    top: "64.04%",
    bottom: "14.7%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  trackYourProgress: {
    fontWeight: "700",
    color: Color.colorGray_400,
    left: "0%",
    top: "0%",
  },
  group4: {
    width: "38.67%",
    top: "68.24%",
    right: "46.4%",
    bottom: "29.13%",
    left: "14.93%",
    height: "2.62%",
    position: "absolute",
  },
  inviteAFriend: {
    color: Color.colorGray_400,
    left: "0%",
    top: "0%",
  },
  group5: {
    width: "50.4%",
    top: "71.85%",
    right: "34.67%",
    bottom: "26.18%",
    left: "14.93%",
  },
  invite: {
    top: "26.56%",
    left: "39.23%",
    color: Color.colorBlack,
  },
  group6: {
    height: "4.2%",
    width: "34.67%",
    top: "76.9%",
    bottom: "18.9%",
    left: "14.93%",
  },
  group7: {
    width: "15.47%",
    top: "78.02%",
    right: "28.53%",
    bottom: "20.01%",
    left: "56%",
  },
  logOut: {
    top: "32.14%",
    left: "42.35%",
    color: Color.colorWhite,
  },
  group8: {
    height: "7.35%",
    top: "89.5%",
    bottom: "3.15%",
  },
  frameIcon2: {
    top: "37.27%",
    bottom: "61.15%",
  },
  frameIcon3: {
    top: "45.93%",
    bottom: "52.49%",
  },
  frameIcon4: {
    top: "54.59%",
    bottom: "43.83%",
  },
  prescriptions: {
    color: Color.colorGray_400,
    top: "0%",
    fontSize: FontSize.size_sm,
  },
  group9: {
    width: "20.53%",
    top: "36.88%",
    right: "58.13%",
    bottom: "60.76%",
    height: "2.36%",
  },
  text: {
    top: "47.06%",
    color: Color.colorGray_400,
  },
  group10: {
    height: "4.46%",
    width: "14.67%",
    top: "45.54%",
    right: "64%",
    bottom: "50%",
  },
  group11: {
    width: "9.6%",
    top: "54.2%",
    right: "69.07%",
    bottom: "43.44%",
    height: "2.36%",
  },
  groupIcon9: {
    height: "8.4%",
    width: "17.07%",
    top: "14.17%",
    right: "76.53%",
    bottom: "77.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  record1: {
    flex: 1,
    height: 762,
    overflow: "hidden",
    width: "100%",
  },
});

export default Record;
