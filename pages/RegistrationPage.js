import React from 'react';
import { TouchableOpacity, Text, TextInput, View, Image, Alert, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your name.'),
  email: Yup.string().email('Invalid email.').required('Please enter your email address.'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters.')
  .required('Please enter your password.'),
});

const handleRegister = async () => {
  try {
    const response = await axios.post('http://192.168.1.66:3000/api/register', {
      name,
      email,
      password,
    });

    console.log(response.data);

    // Assuming your Laravel API returns a message on successful registration
    Alert.alert('Success', 'Registration successful');

    // You can navigate to the login screen or perform other actions here
  } catch (error) {
    console.error(error);

    // Handle registration error
    Alert.alert('Error', 'Registration failed. Please try again.');
  }
};

const RegistrationPage = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const goLogin =() =>{navigation.navigate('LoginPage')};

    return (
      <Formik initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      >
      {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit,dirty}) => (
      <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/flow.png')} />
      <Text style={styles.textTitle}>Create Account</Text>
      
      <TextInput style={MainStyles.input} 
      placeholder="Name"
      value={values.name}
      onChangeText={handleChange('name')}
      onBlur={() => setFieldTouched('name')}
      />
      {touched.name && errors.name && (
        <Text style={MainStyles.errorTxt}>{errors.name}</Text>
      )}

      <TextInput style={MainStyles.input} 
      placeholder="Email" 
      value={values.email}
      onChangeText={handleChange('email')}
      onBlur={() => setFieldTouched('email')}
      />
      {touched.email && errors.email && (
        <Text style={MainStyles.errorTxt}>{errors.email}</Text>
      )}

      <TextInput style={MainStyles.input} 
      placeholder="Password" 
      secureTextEntry 
      value={values.password}
      onChangeText={handleChange('password')}
      onBlur={() => setFieldTouched('password')}
      />
      {touched.password && errors.password && (
        <Text style={MainStyles.errorTxt}>{errors.password}</Text>
      )}
      

      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Home'); Alert.alert('Account successfully registered!') }} 
      disabled={!isValid || !dirty}
      >
        <Text style={MainStyles.textColor}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.Bottom}>
            <Text style={styles.loginInfo}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
          </View>
    </View>
    )}
    </Formik>
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
