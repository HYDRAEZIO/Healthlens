import * as React from "react";
import { Image, Dimensions, StyleSheet, Text, View , ScrollView, Button } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";


const { width, height } = Dimensions.get("window");
const scale = width / 375;

const Home = ({navigation}) => {
  return (
    
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerSubtitle}>Take control of your health!</Text>
      <Image 
        style={styles.group18}
        source={require('../assets/group18.png')}></Image>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monitor your health</Text>
        <Text style={styles.sectionSubtitle}>Stay informed</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Image
              style={styles.buttonIcon}
              source={require('../assets/vector1.png')} // Assuming the image is in the assets folder
            />
            <Button title="Get Started" style={styles.halfButton} onPress={() => {navigation.navigate("HealthCheckup")}} />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Health Products</Text>
        <View style={styles.productGrid}>
          <View style={styles.productItem}>
            <Image
              style={styles.productIcon}
              source={require("../assets/group8.png")}
            />
            <Text style={styles.productText}>Health</Text>
          </View>
          <View style={styles.productItem}>
            <Image
              style={styles.productIcon}
              source={require("../assets/group10.png")}
            />
            <Text style={styles.productText}>Medicines</Text>
          </View>
          <View style={styles.productItem}>
            <Image
              style={styles.productIcon}
              source={require("../assets/group12.png")}
            />
            <Text style={styles.productText}>Contact</Text>
          </View>
          <View style={styles.productItem}>
            <Image
              style={styles.productIcon}
              source={require("../assets/group11.png")}
            />
            <Text style={styles.productText}>Course</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>More Options</Text>
        <View style={styles.productGrid}>
          <View style={styles.productItem}>
            <Image
              style={styles.productIcon}
              source={require("../assets/group16.png")}
            />
            <Text style={styles.productText}>Doctor</Text>
          </View>
          <View style={styles.productItem}>
            <Image
              style={styles.productIcon}
              source={require("../assets/group14.png")}
            />
            <Text style={styles.productText}>Community</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connect with our</Text>
        <View style={styles.connectContainer}>
          <Text style={styles.connectText}>Available 24/7</Text>
          <Button title="Chat Now" style={styles.button} />
          <View style={styles.button}>
            <Image
              style={styles.buttonIcon}
              source={require("../assets/vector1.png")}
            />
            
          </View>
          <Image
            style={styles.connectImage}
            source={require("../assets/group17.png")}
          />
        </View>
      </View>

      <View style={styles.footer}>
        
        <View style={styles.footerIcons}>
          <Image
            style={styles.footerIconItem}
            source={require("../assets/frame4.png")}
          />
          <Image
            style={styles.footerIconItem}
            source={require("../assets/frame1.png")}
          />
          <Image
          style={styles.footerLogo}
          source={require("../assets/frame5.png")}
        />
          <Image
            style={styles.footerIconItem}
            source={require("../assets/frame2.png")}
          />
          <Image
            style={styles.footerIconItem}
            source={require("../assets/frame3.png")}
          />
          
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    alignItems: "center",
    paddingVertical: 20 * scale,
  },
  headerTitle: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_base * scale,
    color: Color.colorGray_400,
  },
  headerImage: {
     width: 350, // Adjust image size as needed
    height: 30, // Adjust image size as needed
    borderRadius: 10
  },
  headerSubtitle: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10, // Add some margin
  },
  halfButton:{
    backgroundColor: '#ECE598', // White background
    borderRadius: 50, // Rounded corners with 10 pixels radius
    borderWidth: 20, // Border width of 2 pixels
    borderColor: '#fff', // Blue border color
    paddingHorizontal: 20, // Horizontal padding of 20 pixels
    paddingVertical: 10, // Vertical padding of 10 pixels
  },
  section: {
    paddingHorizontal: 20 * scale,
    paddingVertical: 10 * scale,
  },
  sectionTitle: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_base * scale,
    fontWeight: "700",
    color: Color.colorGray_400,
    marginBottom: 10 * scale,
  },
  sectionSubtitle: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_sm * scale,
    color: Color.colorGray_400,
    marginBottom: 10 * scale,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
      flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 16 * scale,
    height: 16 * scale,
    resizeMode: "contain",
    marginRight: 5 * scale,
    marginBottom: 20,

  },
  buttonText: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_sm * scale,
    color: Color.colorBlack,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productItem: {
    width: "48%",
    alignItems: "center",
    marginBottom: 10 * scale,
  },
  productIcon: {
    width: 48 * scale,
    height: 48 * scale,
    resizeMode: "contain",
    marginBottom: 5 * scale,
  },
  productText: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_sm * scale,
    color: Color.colorGray_400,
  },
  connectContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectText: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: 16,
    marginBottom: 10
  },
  connectImage: {
     width: 100,
    height: 100,
    borderRadius: 50,
  },
  footer: {
    flexDirection: "row",
    alignItems: "allign",
    justifyContent: "centre",
    paddingHorizontal: 30 * scale,
    paddingVertical: 10 * scale,
    backgroundColor: Color.colorwhite_100,
  },
  footerIcon: {
    width: 80 * scale,
    height: 70 * scale,
    resizeMode: "contain",
  },
  footerIcons: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"
  },
  footerIconItem: {
    width: 50 * scale,
    height: 50 * scale,
    resizeMode: "contain",
    marginHorizontal: 12* scale,
  },
  footerLogo: {
    width: 40 * scale,
    height: 40 * scale,
    resizeMode: "contain",
  },
});

export default Home;