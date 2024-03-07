import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile1 = () => {
  return (
    <View style={styles.profile2}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout5]}
        contentFit="cover"
        source={require("../assets/vector28.png")}
      />
      <View style={[styles.group, styles.groupPosition8]}>
        <Text style={[styles.healthconnect, styles.textTypo]}>
          HealthConnect
        </Text>
      </View>
      <View style={[styles.group1, styles.groupPosition8]}>
        <Text style={[styles.seamlessCommunication, styles.rewardsTypo]}>
          Seamless communication
        </Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout5]}
        contentFit="cover"
        source={require("../assets/group90.png")}
      />
      <View style={styles.group2}>
        <Text style={[styles.clearHealthData, styles.textTypo]}>
          Clear health data
        </Text>
      </View>
      <View style={[styles.group3, styles.group3Layout]}>
        <Text style={[styles.clearHealthData, styles.textTypo]}>
          Achievements
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.group3Layout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.group4, styles.groupPosition7]}>
        <Text style={[styles.totalWorkouts, styles.rewardsTypo]}>
          Total workouts
        </Text>
      </View>
      <View style={[styles.group5, styles.groupPosition5]}>
        <Text style={[styles.text, styles.textTypo]}>100</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.group3Layout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.group6, styles.groupPosition6]}>
        <Text style={[styles.text, styles.textTypo]}>10,000</Text>
      </View>
      <View style={[styles.group7, styles.groupPosition7]}>
        <Text style={[styles.totalWorkouts, styles.rewardsTypo]}>
          Calories burnt
        </Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame33.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.group3Layout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.group8, styles.groupPosition6]}>
        <Text style={[styles.text, styles.textTypo]}>10</Text>
      </View>
      <View style={styles.group9}>
        <Text style={[styles.rewards, styles.rewardsTypo]}>Rewards</Text>
        <Text style={[styles.collected, styles.rewardsTypo]}>collected</Text>
      </View>
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout2]}
        contentFit="cover"
        source={require("../assets/frame34.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group91.png")}
      />
      <View style={[styles.group10, styles.groupPosition4]}>
        <Text style={[styles.workoutMaster, styles.progressPosition]}>
          Workout master
        </Text>
      </View>
      <View style={[styles.group11, styles.groupPosition4]}>
        <Text style={[styles.workOutFor, styles.progressPosition]}>
          Work out for 500 minutes!
        </Text>
      </View>
      <View style={[styles.group12, styles.groupPosition1]}>
        <Text style={[styles.progress, styles.progressPosition]}>Progress</Text>
      </View>
      <View style={[styles.group13, styles.groupPosition1]}>
        <Text style={[styles.progress, styles.progressPosition]}>360/500</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.group3Layout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group92.png")}
      />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group93.png")}
      />
      <Image
        style={[styles.groupIcon4, styles.groupIconLayout4]}
        contentFit="cover"
        source={require("../assets/group91.png")}
      />
      <View style={[styles.group14, styles.groupPosition4]}>
        <Text style={[styles.workoutMaster, styles.progressPosition]}>
          Weekender
        </Text>
      </View>
      <View style={[styles.group15, styles.groupPosition4]}>
        <Text style={[styles.workOutFor, styles.progressPosition]}>
          Two workouts on the weekend!
        </Text>
      </View>
      <View style={[styles.group16, styles.groupPosition]}>
        <Text style={[styles.progress, styles.progressPosition]}>Progress</Text>
      </View>
      <View style={[styles.group17, styles.groupPosition]}>
        <Text style={[styles.progress, styles.progressPosition]}>1/2</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.group3Layout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout3]}
        contentFit="cover"
        source={require("../assets/group92.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout2]}
        contentFit="cover"
        source={require("../assets/group94.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconLayout5]}
        contentFit="cover"
        source={require("../assets/group19.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame11.png")}
      />
      <Image
        style={[styles.frameIcon6, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame35.png")}
      />
      <View style={styles.group18}>
        <Text style={[styles.clearHealthData, styles.textTypo]}>
          Improvement
        </Text>
      </View>
      <Image
        style={[styles.groupIcon8, styles.groupIconLayout5]}
        contentFit="cover"
        source={require("../assets/group95.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconPosition4]}
        contentFit="cover"
        source={require("../assets/group96.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconPosition3]}
        contentFit="cover"
        source={require("../assets/group96.png")}
      />
      <Image
        style={[styles.groupIcon11, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group97.png")}
      />
      <Image
        style={[styles.groupIcon12, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group96.png")}
      />
      <Image
        style={[styles.groupIcon13, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group98.png")}
      />
      <Image
        style={styles.groupIcon14}
        contentFit="cover"
        source={require("../assets/group96.png")}
      />
      <Image
        style={[styles.groupIcon15, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group99.png")}
      />
      <Image
        style={[styles.groupIcon16, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group96.png")}
      />
      <Image
        style={[styles.groupIcon17, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group100.png")}
      />
      <Image
        style={[styles.groupIcon18, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group101.png")}
      />
      <Image
        style={[styles.groupIcon19, styles.groupIconPosition1]}
        contentFit="cover"
        source={require("../assets/group102.png")}
      />
      <Image
        style={[styles.groupIcon20, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group103.png")}
      />
      <Image
        style={[styles.groupIcon21, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group104.png")}
      />
      <Image
        style={[styles.groupIcon22, styles.groupIconPosition2]}
        contentFit="cover"
        source={require("../assets/group105.png")}
      />
      <Image
        style={[styles.groupIcon23, styles.groupIconLayout1]}
        contentFit="cover"
        source={require("../assets/group106.png")}
      />
      <Image
        style={[styles.groupIcon24, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/group50.png")}
      />
      <Image
        style={[styles.frameIcon7, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout5: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition8: {
    left: "31.73%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  rewardsTypo: {
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  group3Layout: {
    width: "26.67%",
    position: "absolute",
  },
  groupPosition7: {
    bottom: "74.32%",
    top: "23.86%",
    height: "1.82%",
    position: "absolute",
  },
  groupPosition5: {
    left: "14.13%",
    position: "absolute",
  },
  groupPosition6: {
    bottom: "76.59%",
    top: "21.08%",
    height: "2.33%",
  },
  frameIconLayout2: {
    bottom: "80.18%",
    top: "16.58%",
    width: "8.53%",
    height: "3.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout4: {
    right: "5.33%",
    width: "89.33%",
    height: "14.36%",
    left: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition4: {
    left: "11.73%",
    position: "absolute",
  },
  progressPosition: {
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition1: {
    bottom: "54.95%",
    top: "43.53%",
    height: "1.52%",
    position: "absolute",
  },
  groupIconLayout3: {
    left: "11.87%",
    right: "11.87%",
    width: "76.27%",
    height: "0.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout2: {
    height: "0.81%",
    left: "11.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "38.98%",
    top: "59.5%",
    height: "1.52%",
    position: "absolute",
  },
  frameIconLayout1: {
    bottom: "2.02%",
    top: "94.74%",
    width: "8.53%",
    height: "3.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    height: "4.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition4: {
    left: "10.13%",
    right: "8.53%",
    width: "81.33%",
    height: "0.1%",
  },
  groupIconPosition3: {
    top: "84.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition2: {
    bottom: "12.44%",
    width: "4%",
  },
  groupIconPosition1: {
    top: "80.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout1: {
    width: "4%",
    bottom: "12.34%",
  },
  groupIconPosition: {
    top: "73.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    height: "10.92%",
    top: "76.74%",
    width: "4%",
    bottom: "12.34%",
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
  healthconnect: {
    fontSize: FontSize.size_5xl,
  },
  group: {
    height: "3.03%",
    width: "42.4%",
    top: "4.1%",
    right: "25.87%",
    bottom: "92.87%",
  },
  seamlessCommunication: {
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
  },
  group1: {
    width: "45.87%",
    top: "7.18%",
    right: "22.4%",
    bottom: "90.8%",
    height: "2.02%",
  },
  groupIcon: {
    height: "6.47%",
    width: "17.07%",
    top: "3.34%",
    right: "73.6%",
    bottom: "90.19%",
    left: "9.33%",
    position: "absolute",
  },
  clearHealthData: {
    fontSize: FontSize.size_base,
  },
  group2: {
    width: "32.27%",
    top: "12.94%",
    right: "62.4%",
    bottom: "85.04%",
    left: "5.33%",
    height: "2.02%",
    position: "absolute",
  },
  group3: {
    top: "30.74%",
    right: "68%",
    bottom: "67.24%",
    left: "5.33%",
    height: "2.02%",
  },
  vectorIcon1: {
    height: "10.11%",
    right: "73.33%",
    bottom: "89.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    top: "0%",
  },
  totalWorkouts: {
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
  },
  group4: {
    width: "23.2%",
    right: "70.4%",
    left: "6.4%",
  },
  text: {
    fontSize: FontSize.size_lg,
  },
  group5: {
    width: "7.73%",
    right: "78.13%",
    bottom: "76.59%",
    top: "21.08%",
    height: "2.33%",
  },
  group6: {
    width: "14.13%",
    right: "42.67%",
    left: "43.2%",
    position: "absolute",
  },
  group7: {
    width: "22.13%",
    right: "38.93%",
    left: "38.93%",
  },
  frameIcon: {
    left: "45.87%",
    right: "45.6%",
  },
  group8: {
    width: "5.33%",
    right: "14.93%",
    left: "79.73%",
    position: "absolute",
  },
  rewards: {
    left: "5.56%",
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  collected: {
    top: "50%",
    fontSize: FontSize.size_sm,
    left: "0%",
  },
  group9: {
    width: "14.4%",
    bottom: "72.5%",
    left: "74.67%",
    right: "10.93%",
    height: "3.64%",
    top: "23.86%",
    position: "absolute",
  },
  frameIcon1: {
    right: "13.6%",
    left: "77.87%",
  },
  groupIcon1: {
    top: "34.78%",
    bottom: "50.86%",
  },
  workoutMaster: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.colorGray_400,
  },
  group10: {
    width: "30.4%",
    top: "37.21%",
    right: "57.87%",
    bottom: "60.77%",
    height: "2.02%",
  },
  workOutFor: {
    fontSize: FontSize.size_sm,
  },
  group11: {
    width: "40.27%",
    top: "39.64%",
    right: "48%",
    bottom: "58.54%",
    height: "1.82%",
    left: "11.73%",
  },
  progress: {
    fontSize: FontSize.size_xs,
  },
  group12: {
    right: "76.53%",
    width: "11.73%",
    left: "11.73%",
  },
  group13: {
    right: "11.73%",
    left: "77.6%",
    width: "10.67%",
  },
  groupIcon2: {
    top: "45.96%",
    bottom: "53.34%",
  },
  groupIcon3: {
    width: "51.2%",
    top: "45.9%",
    right: "37.07%",
    bottom: "53.29%",
  },
  groupIcon4: {
    top: "50.76%",
    bottom: "34.88%",
  },
  group14: {
    width: "21.33%",
    top: "53.19%",
    right: "66.93%",
    bottom: "44.79%",
    height: "2.02%",
  },
  group15: {
    width: "48.8%",
    top: "55.61%",
    right: "39.47%",
    bottom: "42.57%",
    height: "1.82%",
    left: "11.73%",
  },
  group16: {
    right: "76.53%",
    width: "11.73%",
    left: "11.73%",
  },
  group17: {
    width: "4.53%",
    right: "11.47%",
    left: "84%",
  },
  groupIcon5: {
    top: "61.93%",
    bottom: "37.36%",
  },
  groupIcon6: {
    width: "38.4%",
    top: "61.88%",
    right: "49.87%",
    bottom: "37.31%",
  },
  groupIcon7: {
    height: "6.98%",
    top: "93.02%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  frameIcon2: {
    right: "65.07%",
    left: "26.4%",
  },
  frameIcon3: {
    right: "82.13%",
    left: "9.33%",
  },
  frameIcon4: {
    right: "28%",
    left: "63.47%",
  },
  frameIcon5: {
    left: "80.53%",
    right: "10.93%",
  },
  frameIcon6: {
    top: "66.53%",
    right: "84%",
    bottom: "29.42%",
    width: "10.67%",
    left: "5.33%",
  },
  group18: {
    width: "25.87%",
    top: "67.54%",
    right: "56.27%",
    bottom: "30.43%",
    left: "17.87%",
    height: "2.02%",
    position: "absolute",
  },
  groupIcon8: {
    height: "19.31%",
    width: "90.67%",
    top: "71.64%",
    right: "3.87%",
    bottom: "9.05%",
    left: "5.47%",
    position: "absolute",
  },
  groupIcon9: {
    top: "87.56%",
    bottom: "12.34%",
    left: "10.13%",
    right: "8.53%",
    width: "81.33%",
    height: "0.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon10: {
    bottom: "15.87%",
    left: "10.13%",
    right: "8.53%",
    width: "81.33%",
    height: "0.1%",
  },
  groupIcon11: {
    height: "13.25%",
    top: "74.32%",
    right: "81.87%",
    left: "14.13%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon12: {
    bottom: "19.51%",
    left: "10.13%",
    right: "8.53%",
    width: "81.33%",
    height: "0.1%",
  },
  groupIcon13: {
    height: "7.99%",
    top: "79.68%",
    right: "65.6%",
    left: "30.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupIcon14: {
    bottom: "23.15%",
    top: "76.74%",
    left: "10.13%",
    right: "8.53%",
    width: "81.33%",
    height: "0.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon15: {
    height: "14.46%",
    right: "49.33%",
    left: "46.67%",
    bottom: "12.44%",
    width: "4%",
  },
  groupIcon16: {
    bottom: "26.79%",
    left: "10.13%",
    right: "8.53%",
    width: "81.33%",
    height: "0.1%",
  },
  groupIcon17: {
    right: "17.07%",
    left: "78.93%",
  },
  groupIcon18: {
    right: "77.07%",
    left: "18.93%",
  },
  groupIcon19: {
    height: "7.28%",
    right: "33.33%",
    left: "62.67%",
    width: "4%",
    bottom: "12.34%",
  },
  groupIcon20: {
    height: "12.23%",
    top: "75.43%",
    right: "60.8%",
    left: "35.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupIcon21: {
    height: "9.81%",
    top: "77.76%",
    right: "45.33%",
    left: "50.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupIcon22: {
    height: "12.64%",
    top: "74.92%",
    right: "12.27%",
    left: "83.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupIcon23: {
    right: "28.53%",
    left: "67.47%",
    top: "84.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    height: "3.64%",
  },
  groupIcon24: {
    width: "9.07%",
    top: "4.15%",
    right: "90.67%",
    bottom: "91.81%",
    left: "0.27%",
  },
  frameIcon7: {
    top: "94.34%",
    bottom: "1.62%",
    left: "43.73%",
    width: "10.67%",
    right: "45.6%",
  },
  profile2: {
    flex: 1,
    height: 989,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile1;
