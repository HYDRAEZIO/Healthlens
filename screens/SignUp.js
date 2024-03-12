import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontFamily, Color, FontSize, ButtonSize } from "../GlobalStyles";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.signUp1}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.healthconnect, styles.healthconnectPosition]}>
          HealthConnect
        </Text>
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group3.png")}
      />
      <View style={[styles.group1, styles.groupPosition1]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.email, styles.orTypo]}>Email</Text>
      </View>
      <View style={[styles.group2, styles.groupPosition1]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.email, styles.orTypo]}>Password</Text>
      </View>
      <View style={styles.group3}>
        <Text style={[styles.forgotYourPassword, styles.healthconnectPosition]}>
          Forgot your password?
        </Text>
      </View>
      <View style={styles.group4}>
        <TouchableOpacity
          style={ButtonSize}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Text style={styles.logIn}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group5}>
        <Text style={[styles.or, styles.orTypo]}>or</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group21.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group21.png")}
      />
      <View style={[styles.group6, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
      </View>
      <View style={[styles.group7, styles.groupPosition]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.google, styles.googleTypo]}>Google</Text>
      </View>
      <View style={styles.group8}>
        <TouchableOpacity onPress={()=>{navigation.navigate('')}}>
          <Text
            style={[styles.newToHealthconnect, styles.healthconnectPosition]}
          >
            New to HealthConnect? Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.groupIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group22.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  healthconnectPosition: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorGray_400,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupPosition1: {
    left: "6.53%",
    right: "6.53%",
    width: "86.93%",
    height: "7.05%",
    position: "absolute",
  },
  orTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    position: "absolute",
  },
  groupIconLayout: {
    bottom: "24.14%",
    top: "75.71%",
    width: "37.6%",
    height: "0.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "13.04%",
    top: "79.76%",
    width: "41.87%",
    height: "7.2%",
    position: "absolute",
  },
  googleTypo: {
    top: "31.25%",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  healthconnect: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
  },
  group: {
    height: "4.5%",
    width: "42.4%",
    top: "25.26%",
    right: "28.27%",
    bottom: "70.24%",
    left: "29.33%",
    position: "absolute",
  },
  maskGroupIcon: {
    height: "3.6%",
    top: "29.99%",
    bottom: "66.42%",
    left: "6.4%",
    right: "6.4%",
    width: "87.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  email: {
    top: "30.85%",
    left: "2.45%",
    color: Color.colorGray_100,
  },
  group1: {
    top: "38.46%",
    bottom: "54.5%",
  },
  group2: {
    top: "48.05%",
    bottom: "44.9%",
  },
  forgotYourPassword: {
    fontSize: 10,
  },
  group3: {
    height: "1.95%",
    width: "25.33%",
    top: "56.37%",
    bottom: "41.68%",
    left: "68.27%",
    right: "6.4%",
    position: "absolute",
  },
  logIn: {
    top: "29.17%",
    left: "43.73%",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    position: "absolute",
  },
  group4: {
    top: "63.12%",
    bottom: "29.69%",
    height: "7.2%",
    left: "6.4%",
    right: "6.4%",
    width: "87.2%",
    position: "absolute",
  },
  or: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
  },
  group5: {
    height: "2.7%",
    width: "3.47%",
    top: "74.21%",
    right: "48.27%",
    bottom: "23.09%",
    left: "48.27%",
    position: "absolute",
  },
  groupIcon: {
    left: "56%",
    right: "6.4%",
  },
  groupIcon1: {
    right: "56%",
    left: "6.4%",
  },
  facebook: {
    left: "31.53%",
  },
  group6: {
    right: "51.73%",
    left: "6.4%",
  },
  google: {
    left: "36.62%",
  },
  group7: {
    left: "51.73%",
    right: "6.4%",
  },
  newToHealthconnect: {
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
  },
  group8: {
    height: "2.25%",
    width: "44.27%",
    top: "90.03%",
    right: "27.2%",
    bottom: "7.72%",
    left: "28.53%",
    position: "absolute",
  },
  groupIcon2: {
    height: "19.19%",
    width: "34.13%",
    top: "6%",
    right: "32.8%",
    bottom: "74.81%",
    left: "33.07%",
  },
  signUp1: {
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp;
