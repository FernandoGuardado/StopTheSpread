import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const ReportSymptoms = ({buttonTitle, ...rest}) =>{
    return (
      <TouchableOpacity style={styles.buttonContainer} {...rest}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
};
export default ReportSymptoms;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Helvetica Neue'
  },
  });