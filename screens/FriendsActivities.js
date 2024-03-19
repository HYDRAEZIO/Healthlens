import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FriendsActivities = ({navigation}) => {
  return (
    <View style={styles.friendsActivities1}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout7]}
        contentFit="cover"
        source={require("../assets/group23.png")}
      />
      <View style={[styles.group, styles.groupPosition1]}>
        <Text style={styles.stayActiveAnd}>Stay Active and Connected</Text>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout6]}
        contentFit="cover"
        source={require("../assets/group24.png")}
      />
      <View style={[styles.group1, styles.groupPosition]}>
        <Text style={[styles.jamesCompletedHis, styles.addFriendsTypo]}>
          James completed his
        </Text>
        <Text style={[styles.morningWorkout, styles.yogaPosition]}>
          morning workout
        </Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group25.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group26.png")}
      />
      <View style={[styles.group2, styles.groupIconLayout4]}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Text style={[styles.addFriends, styles.addFriendsTypo]}>
          Add Friends
        </Text>
      </View>
      <Image
        style={[styles.groupIcon4, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group27.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout6]}
        contentFit="cover"
        source={require("../assets/group28.png")}
      />
      <View style={[styles.group3, styles.groupPosition1]}>
        <Text style={[styles.jessicaIsGoing, styles.addFriendsTypo]}>
          Jessica is going for a run
        </Text>
      </View>
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group29.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group30.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout6]}
        contentFit="cover"
        source={require("../assets/group31.png")}
      />
      <View style={[styles.group4, styles.groupLayout]}>
        <Text style={[styles.jamesCompletedHis, styles.addFriendsTypo]}>
          David seeks inspiration
        </Text>
        <Text style={[styles.andMotivation, styles.yogaPosition]}>
          and motivation
        </Text>
      </View>
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group32.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group33.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconLayout7]}
        contentFit="cover"
        source={require("../assets/group34.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconLayout6]}
        contentFit="cover"
        source={require("../assets/group35.png")}
      />
      <Image
        style={[styles.maskGroupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group4.png")}
      />
      <Image
        style={[styles.groupIcon13, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group36.png")}
      />
      <Image
        style={[styles.groupIcon14, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group37.png")}
      />
      <Image
        style={[styles.groupIcon15, styles.groupIconLayout7]}
        contentFit="cover"
        source={require("../assets/group38.png")}
      />
      <Image
        style={[styles.groupIcon16, styles.groupIconLayout6]}
        contentFit="cover"
        source={require("../assets/group39.png")}
      />
      <View style={[styles.group5, styles.groupLayout]}>
        <Text style={[styles.jamesCompletedHis, styles.addFriendsTypo]}>
          Monica attended morning
        </Text>
        <Text style={[styles.yoga, styles.yogaPosition]}>yoga</Text>
      </View>
      <Image
        style={[styles.groupIcon17, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group40.png")}
      />
      <Image
        style={[styles.groupIcon18, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group41.png")}
      />
      <Image
        style={[styles.groupIcon19, styles.groupIconLayout7]}
        contentFit="cover"
        source={require("../assets/group42.png")}
      />
      <Image
        style={[styles.groupIcon20, styles.groupIconLayout7]}
        contentFit="cover"
        source={require("../assets/group43.png")}
      />
      <Image
        style={[styles.groupIcon21, styles.groupIconLayout7]}
        contentFit="cover"
        source={require("../assets/group44.png")}
      />
      <Image
        style={[styles.groupIcon22, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group45.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame6.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame7.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame8.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame9.png")}
      />
      <Image
        style={[styles.groupIcon23, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group46.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/frame10.png")}
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
  groupIconLayout7: {
    right: "77.87%",
    width: "12.8%",
    height: "7.04%",
    left: "9.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    left: "25.33%",
    position: "absolute",
  },
  groupIconLayout6: {
    left: "5.33%",
    right: "5.33%",
    width: "89.33%",
    height: "10.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    right: "41.6%",
    position: "absolute",
  },
  addFriendsTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  yogaPosition: {
    top: "49.85%",
    fontSize: FontSize.size_sm,
    height: "49.85%",
    textAlign: "left",
    color: Color.colorGray_400,
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    position: "absolute",
  },
  groupIconPosition1: {
    left: "72.27%",
    right: "19.73%",
  },
  groupIconLayout4: {
    height: "5.87%",
    position: "absolute",
  },
  groupIconPosition: {
    left: "82.67%",
    right: "9.33%",
  },
  groupIconLayout3: {
    bottom: "29.91%",
    top: "65.7%",
    width: "8%",
    height: "4.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: "5.28%",
    left: "25.33%",
  },
  groupIconLayout2: {
    bottom: "42.09%",
    top: "53.51%",
    width: "8%",
    height: "4.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    bottom: "54.55%",
    top: "41.05%",
    width: "8%",
    height: "4.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    bottom: "66.72%",
    top: "28.89%",
    width: "8%",
    height: "4.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    bottom: "2.94%",
    top: "92.37%",
    width: "8.53%",
    height: "4.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  groupIcon: {
    bottom: "90.03%",
    left: "9.33%",
    top: "2.93%",
  },
  stayActiveAnd: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorGray_400,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  group: {
    width: "70.93%",
    top: "4.18%",
    right: "3.73%",
    bottom: "91.42%",
    height: "4.4%",
    left: "25.33%",
  },
  groupIcon1: {
    top: "13.34%",
    bottom: "76.1%",
  },
  jamesCompletedHis: {
    height: "49.85%",
    fontSize: FontSize.size_sm,
    color: Color.colorGray_400,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  morningWorkout: {
    width: "82.26%",
  },
  group1: {
    width: "33.07%",
    top: "15.98%",
    bottom: "78.75%",
    height: "5.28%",
    left: "25.33%",
  },
  groupIcon2: {
    height: "9.38%",
    width: "17.07%",
    top: "85.34%",
    bottom: "5.28%",
    left: "41.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon3: {
    bottom: "79.18%",
    top: "16.42%",
    width: "8%",
    height: "4.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addFriends: {
    height: "44.85%",
    width: "35%",
    top: "27.44%",
    left: "32.75%",
    color: Color.colorBlack,
  },
  group2: {
    width: "53.33%",
    top: "76.1%",
    right: "24.27%",
    bottom: "18.03%",
    left: "22.4%",
  },
  groupIcon4: {
    bottom: "79.18%",
    top: "16.42%",
    width: "8%",
    height: "4.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon5: {
    top: "62.62%",
    bottom: "26.83%",
  },
  jessicaIsGoing: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  group3: {
    height: "2.63%",
    width: "37.87%",
    top: "66.56%",
    right: "36.8%",
    bottom: "30.8%",
  },
  groupIcon6: {
    left: "82.67%",
    right: "9.33%",
  },
  groupIcon7: {
    left: "72.27%",
    right: "19.73%",
  },
  groupIcon8: {
    top: "50.43%",
    bottom: "39.01%",
  },
  andMotivation: {
    width: "65.93%",
  },
  group4: {
    width: "36%",
    top: "53.08%",
    right: "38.67%",
    bottom: "41.64%",
    position: "absolute",
    height: "5.28%",
  },
  groupIcon9: {
    left: "82.67%",
    right: "9.33%",
  },
  groupIcon10: {
    left: "72.27%",
    right: "19.73%",
  },
  groupIcon11: {
    top: "52.2%",
    bottom: "40.76%",
    left: "9.33%",
  },
  groupIcon12: {
    top: "37.97%",
    bottom: "51.47%",
  },
  maskGroupIcon: {
    width: "41.6%",
    top: "40.62%",
    right: "33.07%",
    bottom: "54.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
    height: "5.28%",
  },
  groupIcon13: {
    left: "82.67%",
    right: "9.33%",
  },
  groupIcon14: {
    left: "72.27%",
    right: "19.73%",
  },
  groupIcon15: {
    top: "39.74%",
    bottom: "53.22%",
    left: "9.33%",
  },
  groupIcon16: {
    top: "25.8%",
    bottom: "63.64%",
  },
  yoga: {
    width: "18.54%",
  },
  group5: {
    width: "40.27%",
    top: "28.45%",
    right: "34.4%",
    bottom: "66.27%",
    position: "absolute",
    height: "5.28%",
  },
  groupIcon17: {
    left: "82.67%",
    right: "9.33%",
  },
  groupIcon18: {
    left: "72.27%",
    right: "19.73%",
  },
  groupIcon19: {
    top: "27.57%",
    bottom: "65.39%",
    left: "9.33%",
  },
  groupIcon20: {
    top: "15.11%",
    bottom: "77.85%",
    left: "9.33%",
  },
  groupIcon21: {
    top: "64.37%",
    bottom: "28.59%",
    left: "9.33%",
  },
  groupIcon22: {
    height: "10.12%",
    top: "89.88%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  frameIcon: {
    right: "65.07%",
    left: "26.4%",
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
  groupIcon23: {
    width: "9.07%",
    right: "90.67%",
    bottom: "91.21%",
    left: "0.27%",
    top: "2.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIcon4: {
    width: "10.67%",
    top: "90.91%",
    right: "44%",
    bottom: "3.22%",
    left: "45.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  friendsActivities1: {
    flex: 1,
    height: 646,
    overflow: "hidden",
    width: "100%",
  },
});

export default FriendsActivities;
