import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize,ButtonSize} from "../GlobalStyles";


const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.welcomePage1}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.healthconnect, styles.getStartedTypo]}>
          HealthLens
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <View style={[styles.group1, styles.groupLayout]}>
        <TouchableOpacity
          style={ButtonSize}
          onPress={() => {navigation.navigate("login")}}
        >
          <Image
            style={[styles.vectorIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.getStarted, styles.getStartedTypo]}>
            Get started
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group20.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  getStartedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: "8.4%",
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
  healthconnect: {
    fontSize: 42,
    textAlign: "left",
    color: Color.colorGray_400,
    left: "0%",
    top: "0%",
  },
  group: {
    height: "6.75%",
    width: "63.47%",
    top: "59.97%",
    right: "18.13%",
    bottom: "33.28%",
    left: "18.4%",
    position: "absolute",
  },
  maskGroupIcon: {
    width: "43.47%",
    top: "68.37%",
    right: "28.27%",
    bottom: "23.24%",
    left: "28.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  getStarted: {
    top: "29.46%",
    left: "36.87%",
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
  },
  group1: {
    width: "89.33%",
    top: "86.81%",
    right: "5.33%",
    bottom: "4.8%",
    left: "5.33%",
  },
  groupIcon: {
    height: "46.48%",
    width: "82.67%",
    top: "9.45%",
    right: "8.53%",
    bottom: "44.08%",
    left: "8.8%",
    position: "absolute",
  },
  welcomePage1: {
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default WelcomePage;
