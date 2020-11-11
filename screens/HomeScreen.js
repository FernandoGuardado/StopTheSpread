import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { firebase } from '@react-native-firebase/database';
//custom components
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import CovPosButton from '../components/CovPosButton';
import CovNegButton from '../components/CovNegButton';
import CovSympButton from '../components/CovSympButton';


const HomeScreen = ({navigation}) =>{

    const {user, logout, setUserInfectionStatus, getUserInfectionStatus} = useContext(AuthContext);
    return (
        <View style={styles.container}>
          <FormButton 
            buttonTitle='Logout'
            onPress={() => {return logout()}}
          />
          <CovPosButton 
            buttonTitle='Yes Covid-19'
            onPress={() =>{ return setUserInfectionStatus('P')}}

          />
          <CovNegButton 
            buttonTitle='No Covid-19'
            onPress={() =>{ return setUserInfectionStatus('N')}}
          />
          <CovSympButton 
            buttonTitle='Symptoms Covid-19'
            onPress={() =>{ return setUserInfectionStatus('M')}}
          />
          <View style={styles.bottomView}>
            <Text>{user.uid}</Text>
            <Text>{getUserInfectionStatus()}</Text>
          </View>

        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
      marginVertical: 35
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5'
    },
    bottomView: {
      width: '100%',
      height: 50,
      backgroundColor: '#EE5407',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick
    },
  });
  
