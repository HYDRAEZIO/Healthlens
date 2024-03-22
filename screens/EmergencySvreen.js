import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform, // For platform-specific styling (optional)
} from 'react-native';

const CareConnect = () => {
  const [userType, setUserType] = useState('patient'); // Initial user type

  const handleUserTypeChange = (newType) => {
    setUserType(newType);
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CareConnect</Text>
      <Text style={styles.subtitle}>Find providers and services easily</Text>
      <Image
        source={require('./careconnect_logo.png')} // Replace with your logo path
        style={styles.image}
      />
      <View style={styles.userTypeContainer}>
        <TouchableOpacity
          style={[
            styles.userTypeButton,
            userType === 'patient' && styles.userTypeButtonSelected, // Conditional styling for selected user type
          ]}
          onPress={() => handleUserTypeChange('patient')}
        >
          <Text style={styles.userTypeText}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.userTypeButton,
            userType === 'doctor' && styles.userTypeButtonSelected, // Conditional styling for selected user type
          ]}
          onPress={() => handleUserTypeChange('doctor')}
        >
          <Text style={styles.userTypeText}>Doctor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        {/* Add your form input fields here, using responsive styles */}
      </View>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Already User?, Direct Login</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Add a background color if desired
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center the title text
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center', // Center the subtitle text
  },
  image: {
    width: screenWidth * 0.5, // Make image responsive to screen width
    height: screenWidth * 0.5, // Maintain aspect ratio
    resizeMode: 'contain', // Resize image to fit within container
    alignSelf: 'center', // Center the image horizontally
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  userTypeButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc', // Adjust border color as needed
  },
  userTypeButtonSelected: {
    backgroundColor: '#eee', // Add a background color for selected user type
  },
  userTypeText: {
    fontSize: 16,
    textAlign: 'center',
  },
  formContainer: {
    // Add styles for your form input fields here
    // Use flexible units (%, rem, em, vh, vw) and flexbox for responsiveness
  },
  signupButton: {
    padding: 15,
    backgroundColor: '#4CAF50', // Adjust button color as needed
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginTextContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText