import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import MainStyles from '../components/config/styles';


const LandingPage = ({ navigation }) => {
    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/flow.png')} />
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => navigation.navigate('Login')}>
        <Text style={MainStyles.textColor}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Register')}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle:{
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  textBody:{
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default LandingPage;
