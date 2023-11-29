import React from 'react';
import { TouchableOpacity, View, Image, Text, Alert, TextInput, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';


const LoginPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const forgotPass = () => {console.log('forgot password is pressed');
    navigation.navigate('AccountRecovery');
    };
  
    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/flow.png')} />
      <TextInput style={MainStyles.input} 
      placeholder="Email" onChangeText={setEmail} />
      <TextInput style={MainStyles.input} 
      placeholder="Password" onChangeText={setPassword} secureTextEntry />
      
      <TouchableOpacity onPress={forgotPass}>
        <Text style={styles.forgotpassButton}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Home')}} >
        <Text style={MainStyles.textColor}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Register')} >
        <Text>Sign up</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Landing')} >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle:{
    fontSize: 28,
    fontWeight: '800',
    color: '#1e90ff',
    textAlign: 'center',
    marginBottom: 25,
},
forgotpassButton:{
  fontWeight: 'bold',
  textDecorationLine: 'underline',
  fontSize: 12,
},
});

export default LoginPage;
