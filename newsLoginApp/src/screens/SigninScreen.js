import React, {useContext} from "react";

import { View, StyleSheet, Text } from "react-native";

import AuthForm from "../components/AuthForm";

import NavLink from "../components/NavLink";
import axios from "axios";
import authContext from '../context/AuthContext';


const SigninScreen = () => {

  const { setAuthenticated } = useContext(authContext);

  const signInMethod = async (e) => {
    try {
      const response = await axios.post(
        "http://192.168.1.5:4000/user/login",{
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
      alert("Enter valid credentials")
      console.log(error);

      alert("An error has occurred");
    }
  };


  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to your NEWS 365 Account"
        errorMessage=""
        onSubmit={(e) => signInMethod(e)}
        submitButtonText="Sign In"
      />

      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
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

export default SigninScreen;
