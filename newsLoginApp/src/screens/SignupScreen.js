import React, { useContext } from "react";

import { View, StyleSheet } from "react-native";

import AuthForm from "../components/AuthForm";

import NavLink from "../components/NavLink";

import axios from "axios";

import authContext from '../context/AuthContext';

const SignupScreen = (props) => {

  const { setAuthenticated } = useContext(authContext);

  const signUpMethod = async (e) => {
    try {
      const response = await axios.post(
        "http://192.168.1.5:4000/user/signup",{
          username: e.email,
          email: e.email,
          password: e.password,
        }
      );
      if (response.status === 200 ) {
        setAuthenticated(response)
      } else {
        alert("Enter valid credentials")
        throw new Error("An error has occurred");
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong, try again later")

    }
  };

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Register as a new user for NEWS 365"
        submitButtonText="Sign Up"
        onSubmit={(e) => signUpMethod(e)}
      />

      <NavLink
        routeName="Signin"
        text="Already having an account? Sign in instead!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    marginBottom: 200,
  },
});

export default SignupScreen;
