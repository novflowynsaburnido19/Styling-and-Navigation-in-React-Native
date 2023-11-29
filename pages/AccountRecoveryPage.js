import React from 'react';
import { TouchableOpacity, TextInput, View, Image, Text, Alert, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';


const AccountRecoveryPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');

    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/flow.png')} />
      <Text style={styles.textTitle}>Restore Password</Text>
      <TextInput style={MainStyles.input} placeholder="Email" onChangeText={setEmail} />
      
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Login'); Alert.alert('Recovery code has been sent!') }} >
        <Text style={MainStyles.textColor}>Send Recovery Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Login')} >
        <Text>Return</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle:{
    fontSize: 22,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
},
});

export default AccountRecoveryPage;
