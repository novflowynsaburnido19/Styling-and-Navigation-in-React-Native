import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text, TextInput } from 'react-native';
import MainStyles from '../components/config/styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const LandingPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

  return (
    <LinearGradient
      colors={['#13F1FC', '#0470DC']}
      style={[MainStyles.container, styles.container]}>

      <Image style={styles.image} source={require('../assets/a.png')} />

      <Text style={styles.title}>APPLICATIONS DEVELOPMENT AND EMERGING TECHNOLOGIES</Text>

      <View style={[styles.inputContainer, styles.inputContainerWithBorder]}>
        <MaterialCommunityIcons name="account" size={24} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="black"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={[styles.inputContainer, styles.inputContainerWithBorder]}>
        <MaterialCommunityIcons name="lock" size={24} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={!isPasswordVisible} 
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={[MainStyles.textColor, styles.buttonText]}>Login</Text>
        <MaterialCommunityIcons name="arrow-right" size={24} color="black" style={styles.icon} />
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
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainerWithBorder: {
    borderWidth: 1,
    borderColor: 'blue',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    marginRight: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default LandingPage;
