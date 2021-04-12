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
          backgroundColor: "#A6D9E4",
          image: <Image source={require("../assets/heatmap.png")} 
                  style={{ width: wp("100%"), height: hp("50%") }}
                  resizeMode='contain'/>,
          title: "Heat Map",
          subtitle: "This map displays clusters of people. \nGreen circles represent people who haven't reported any symptoms or positive tests of Covid-19. \nOrange are people with Covid-19 symptoms. \nRed are people who tested positive for Covid-19.",
        },
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../assets/locationTracking.png")} 
                  style={{ width: wp("100%"), height: hp("15%") }}
                  resizeMode='contain'/>,
          title: "Location Tracking",
          subtitle: "Click the switch to turn it on (bottom image) and the app will track your location. Click again to turn it off (top image). \nWe need your location data to know if you were near anyone who was infected with Covid-19 and to inform others if you were near them when you had Covid-19.",
        },
        {
          backgroundColor: "#A6D9E4",
          image: <Image source={require("../assets/report.png")} 
                  style={{ width: wp("100%"), height: hp("10%") }}
                  resizeMode='contain'/>,
          title: "Report Button",
          subtitle: "Click on this button to report that you have Covid-19 symptoms or tested positive for the virus. We use this data to inform others if they come in contact with someone positive and to display it on the map.",
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
