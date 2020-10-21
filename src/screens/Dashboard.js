import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import { View, WebView, Text, StyleSheet, SafeAreaView} from "react-native"
import {MapView} from 'react-native'

/*
const Dashboard = () => (
  <Background>
    <Header>StopTheSpread</Header>
    <Paragraph>
      work in progress...
    </Paragraph>
    <Button mode="outlined" onPress={() => logoutUser()}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);*/

const Dashboard = () => {
  return (
    <View style={styles.container}> 

      <SafeAreaView style={styles.descriptionContainerVer}>
      <WebView
        source={{
          uri: 'https://coronavirus.jhu.edu/us-map'
        }}
        style={{ }}
      />
      </SafeAreaView>

      <View style={styles.descriptionContainerVer2}>
        <Button mode="outlined" onPress={() => logoutUser()}>
      Logout
        </Button>
      </View>

    </View>
    
  );
}

var styles = StyleSheet.create({
  container:{
        flex:1,
    flexDirection:'column',
        justifyContent: 'flex-start',
        backgroundColor: 'grey'
    },
    descriptionContainerVer:{
    flex:9, //height (according to its parent)
    //flexDirection: 'column', //its children will be in a row
    //alignItems: 'center',
    // alignSelf: 'center',
  },
  descriptionContainerVer2:{
    flex:1, //height (according to its parent)
    flexDirection: 'column', //its children will be in a row
    alignItems: 'center',
    backgroundColor: 'gray',
    // alignSelf: 'center',
  },
  descriptionContainerHor:{
    //width: 200, //I DON\'T want this line here, because I need to support many screen sizes
    flex: 0.3,  //width (according to its parent)
    flexDirection: 'column',    //its children will be in a column
    alignItems: 'center', //align items according to this parent (like setting self align on each item)
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  descriptionText: {
    backgroundColor: 'green',//Colors.transparentColor,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap'
  }
});

export default memo(Dashboard)