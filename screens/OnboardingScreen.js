import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

//props and info @ https://github.com/jfilter/react-native-onboarding-swiper
const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => {
        return navigation.replace("Login");
      }}
      onDone={() => {
        return navigation.navigate("Login");
      }}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={require("../assets/covid1.jpg")}
              style={{ width: wp("100%"), height: hp("27%") }}
            />
          ),
          title: "Stop The Spread",
          subtitle: "Follow the guidelines",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../assets/onboarding-img1.png")} />,
          title: "Be Informed",
          subtitle: "Do your research",
        },
      ]}
    />
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
