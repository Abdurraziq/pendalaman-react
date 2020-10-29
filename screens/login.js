import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import logo from "../assets/logo.png";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const cekInput = () => {
    if(email && password) {
      login([email, password])
    } else {
      alert(`Anda belum memasukkan Email dan/atau Password.`)
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Silahkan Login 😀</Text>
      <TextInput
        style={[styles.wrapper, styles.textInput]}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.wrapper, styles.textInput]}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassowrd(text)}
      />
      <TouchableOpacity onPress={cekInput}>
        <View style={[styles.wrapper, styles.button]}>
          <Text style={styles.textButton}>LOGIN</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 100,
    marginBottom: responsiveHeight(2),
  },
  title: {
    color: "#2196F3",
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
  },
  wrapper: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: 10,
    marginTop: responsiveHeight(3),
  },
  textInput: {
    borderColor: "#777",
    borderWidth: 1,
    paddingHorizontal: responsiveWidth(3),
  },
  button: {
    alignItems: "center",
    backgroundColor: "#43b2ec",
    justifyContent: "center",
    alignSelf: "center",
  },
  textButton: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: responsiveFontSize(2.2),
  },
});

export default Login;
