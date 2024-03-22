import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  navigation,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/config";
import { collection, getDoc, doc } from "firebase/firestore";
export default function App({ navigation }) {
  const [email, setEmail] = useState("rahulrajv1976@gmail.com");
  const [password, setPassword] = useState("RAJ@2002");
  const auth = getAuth();

  const onLoginPress = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // const uid = response.user.uid;
        // const usersRef = collection(db, "users");
        // const userDocRef = doc(usersRef, uid);
        // alert(JSON.stringify(userDocRef))
        navigation.navigate("Home");
        // getDoc(userDocRef)
        //   .then((userDoc) => {
        //     if (userDoc.exists()) {
        //       const userData = userDoc.data();
        //       userData.id = uid;
        //       navigation.navigate("Home", { user: userData });
        //     } else {
        //       alert("User not found");
        //     }
        //   })
        //   .catch((error) => {
        //     alert(error.message);
        //   });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/group22.png")} style={styles.image} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={styles.loginBtn}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => onLoginPress()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FBB9BE",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F60719",
  },
});
