import React from 'react';
import { TouchableOpacity, View, Image, Text, Alert, TextInput, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';
import { useState } from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Please enter your email.'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters.')
  .required('Please enter your password.'),
});

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [seePassword, setSeePassword] = useState(true)
    const forgotPass = () => {console.log('forgot password is pressed');
    navigation.navigate('AccountRecovery');
    };
  
    return (
      <Formik initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      >
      {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit,dirty}) => (

    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/flow.png')} />
      
      
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
      secureTextEntry={seePassword}
      value={values.password}
      onChangeText={handleChange('password')}
      onBlur={() => setFieldTouched('password')}
      />
      {touched.password && errors.password && (
        <Text style={MainStyles.errorTxt}>{errors.password}</Text>
      )}
    

      <TouchableOpacity style={styles.wrapperIcon}></TouchableOpacity>
      <TouchableOpacity onPress={forgotPass}>
        <Text style={styles.forgotpassButton}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Home')}}
      disabled={!isValid || !dirty}
      >
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
    )}
    </Formik>
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
