import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
//custom components
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';


const HomeScreen = ({navigation}) =>{
    const {user, logout} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <FormButton 
                buttonTitle='Logout'
                onPress={() => {return logout()}}
            />

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
  });
  
