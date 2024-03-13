import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SignUp2 = () => {
  return (
    <View style={styles.signUp}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.signUp1, styles.signUp1Position]}>Sign up</Text>
      </View>
      <View style={styles.group1}>
        <Text style={[styles.createAnAccount, styles.doctorTypo]}>
          Create an account for health management
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group34.png")}
      />
      <View style={[styles.group2, styles.groupIconPosition]}>
        <Text style={[styles.enterYourEMail, styles.doctorTypo]}>
          Enter your e-mail address
        </Text>
      </View>
      <View style={[styles.group3, styles.groupLayout]}>
        <Text style={[styles.enterYourEMail, styles.doctorTypo]}>
          Enter your full name
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon1, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group35.png")}
      />
      <View style={[styles.group4, styles.groupIconPosition]}>
        <Text style={[styles.enterYourEMail, styles.doctorTypo]}>
          Repeat password
        </Text>
      </View>
      <View style={[styles.group5, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector32.png")}
        />
        <Text style={[styles.sername123, styles.signUp2Typo]}>sername123</Text>
      </View>
      <View style={[styles.group6, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector32.png")}
        />
        <Text style={[styles.sername123, styles.signUp2Typo]}>
          irst Name Last Name
        </Text>
      </View>
      <View style={[styles.group7, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector32.png")}
        />
        <Text style={[styles.sername123, styles.signUp2Typo]}>
          *****************
        </Text>
      </View>
      <View style={[styles.group8, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector32.png")}
        />
        <Text style={[styles.sername123, styles.signUp2Typo]}>
          *****************
        </Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame47.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame48.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame49.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.group12Position]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.group9, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector32.png")}
        />
        <Text style={[styles.sername123, styles.signUp2Typo]}>
          mail@email.com
        </Text>
      </View>
      <Image
        style={[styles.frameIcon3, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame50.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame51.png")}
      />
      <View style={[styles.group10, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector33.png")}
        />
        <Text style={[styles.signUp2, styles.signUp2Typo]}>Sign up</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group113.png")}
      />
      <View style={[styles.group11, styles.groupLayout]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
        <Text style={[styles.doctor, styles.doctorClr]}>Doctor</Text>
        <Image
          style={[styles.frameIcon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/frame52.png")}
        />
      </View>
      <View style={[styles.group12, styles.group12Position]}>
        <Text style={[styles.chooseYourRole, styles.doctorClr]}>
          Choose your role
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  signUp1Position: {
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  doctorTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sourceSansPro,
  },
  groupIconPosition: {
    left: "5.33%",
    height: "1.81%",
  },
  groupLayout: {
    width: "31.73%",
    position: "absolute",
  },
  groupPosition: {
    right: "5.33%",
    width: "89.33%",
    height: "4.82%",
    left: "5.33%",
    position: "absolute",
  },
  signUp2Typo: {
    top: "31.25%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  frameIconLayout1: {
    left: "84.53%",
    right: "11.73%",
    width: "3.73%",
    height: "1.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  group12Position: {
    right: "73.33%",
    position: "absolute",
  },
  frameIconLayout: {
    left: "84.27%",
    right: "12%",
    width: "3.73%",
    height: "1.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  doctorClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    left: "0%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  signUp1: {
    fontSize: 32,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
  },
  group: {
    height: "4.02%",
    width: "28%",
    top: "24.02%",
    right: "36%",
    bottom: "71.96%",
    left: "36%",
    position: "absolute",
  },
  createAnAccount: {
    color: Color.colorDimgray,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  group1: {
    width: "65.6%",
    top: "28.94%",
    right: "17.07%",
    bottom: "69.25%",
    left: "17.33%",
    height: "1.81%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: "54.47%",
    bottom: "43.72%",
    right: "41.33%",
    width: "53.33%",
    left: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  enterYourEMail: {
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
    color: Color.colorGray_200,
  },
  group2: {
    width: "40%",
    top: "45.03%",
    right: "54.67%",
    bottom: "53.17%",
    position: "absolute",
  },
  group3: {
    top: "35.58%",
    right: "62.93%",
    bottom: "62.61%",
    left: "5.33%",
    height: "1.81%",
  },
  maskGroupIcon1: {
    top: "63.92%",
    bottom: "34.27%",
    right: "41.33%",
    width: "53.33%",
    left: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  group4: {
    width: "26.93%",
    top: "74.17%",
    right: "67.73%",
    bottom: "24.02%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.08%",
    top: "97.92%",
    left: "0%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  sername123: {
    left: "2.39%",
    color: Color.colorGray_100,
  },
  group5: {
    top: "57.49%",
    bottom: "37.69%",
  },
  group6: {
    top: "38.59%",
    bottom: "56.58%",
  },
  group7: {
    top: "66.93%",
    bottom: "28.24%",
  },
  group8: {
    top: "77.19%",
    bottom: "17.99%",
  },
  frameIcon: {
    top: "68.64%",
    bottom: "29.95%",
  },
  frameIcon1: {
    top: "78.89%",
    bottom: "19.7%",
  },
  frameIcon2: {
    top: "59.2%",
    bottom: "39.4%",
  },
  vectorIcon9: {
    height: "10.05%",
    width: "26.67%",
    bottom: "89.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    top: "0%",
  },
  group9: {
    top: "48.04%",
    bottom: "47.14%",
  },
  frameIcon3: {
    top: "49.75%",
    bottom: "48.84%",
  },
  frameIcon4: {
    top: "40.3%",
    bottom: "58.29%",
  },
  signUp2: {
    left: "43.13%",
    color: Color.colorWhite,
    fontWeight: "700",
    top: "31.25%",
  },
  group10: {
    top: "93.27%",
    bottom: "1.91%",
  },
  groupIcon: {
    height: "20.1%",
    top: "2.01%",
    bottom: "77.89%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  doctor: {
    top: "24.29%",
    left: "6.72%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sourceSansPro,
  },
  frameIcon5: {
    height: "40%",
    width: "11.76%",
    top: "30%",
    right: "6.72%",
    bottom: "30%",
    left: "81.51%",
    position: "absolute",
  },
  group11: {
    height: "3.52%",
    top: "86.58%",
    right: "62.8%",
    bottom: "9.9%",
    left: "5.47%",
  },
  chooseYourRole: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
    top: "0%",
  },
  group12: {
    width: "21.33%",
    top: "83.92%",
    bottom: "14.67%",
    height: "1.41%",
    right: "73.33%",
    left: "5.33%",
  },
  signUp: {
    flex: 1,
    height: 995,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp2;
