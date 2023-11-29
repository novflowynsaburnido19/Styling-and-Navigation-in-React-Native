import React from 'react';
import { TouchableOpacity, Text, TextInput, View, Image, Alert, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';


const RegistrationPage = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const goLogin =() =>{navigation.navigate('LoginPage')};

    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/flow.png')} />
      <Text style={styles.textTitle}>Create Account</Text>
      <TextInput style={MainStyles.input} 
      placeholder="Name" onChangeText={setName} />
      <TextInput style={MainStyles.input} 
      placeholder="Email" onChangeText={setEmail} />
      <TextInput style={MainStyles.input} 
      placeholder="Password" onChangeText={setPassword} secureTextEntry />
      
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Home'); Alert.alert('Account successfully registered!') }} >
        <Text style={MainStyles.textColor}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.Bottom}>
            <Text style={styles.loginInfo}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
          </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  textTitle:{
    fontSize: 25,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
    marginBottom: 25,
},
Bottom:{
  marginTop: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
loginButton:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  textDecorationLine: 'underline',
},
});

export default RegistrationPage;
