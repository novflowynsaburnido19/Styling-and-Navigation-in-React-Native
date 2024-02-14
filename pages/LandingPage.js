import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import MainStyles from '../components/config/styles';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LandingPage = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#13F1FC', '#0470DC']}
      style={[MainStyles.container, styles.container]}>

      {/* Image component placed on top of text */}
      <Image style={styles.image} source={require('../assets/a.png')} />

      <Text style={styles.title}>Applications Development Emerging Technologies</Text>
      
      {/* Button with text and icon */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={[MainStyles.textColor, styles.buttonText]}>Click to Proceed</Text>
        <AntDesign name="arrowright" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  image: {
    width: 500,
    height: 200,
    resizeMode: 'contain', 
    marginBottom: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: -30,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: -10,
  },
  buttonText: {
    fontWeight: 'bold',
    marginRight: 10, 
  },
  icon: {
    marginLeft: 10, 
  },
});

export default LandingPage;
