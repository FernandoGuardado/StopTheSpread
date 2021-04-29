import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  PermissionsAndroid,
  Button,
  Image,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Legend = ({ buttonTitle, ...rest }) => {
  var myLegend = require("../assets/legend.png");
  return <Image style={styles.legend} source={myLegend}></Image>;
};
export default Legend;

const styles = StyleSheet.create({
  legend: {
    width: wp("100%"),
    height: hp("5%"),
    resizeMode: "contain",
  },
});
