import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Image, View } from "react-native"

const HomeScreen = ({ navigation }) => (
  <Background >
    <Logo/>
    
    <Header>StopTheSpread</Header>
    <Paragraph>
      Please register to Stop The Spread! hello
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
