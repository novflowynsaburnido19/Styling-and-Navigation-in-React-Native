import React from 'react';
import { TouchableOpacity, TextInput, View, Image, Text, Alert, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Please enter your email.'),
});

const AccountRecoveryPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');

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
      <Text style={styles.textTitle}>Restore Password</Text>
      <TextInput style={MainStyles.input} 
      placeholder="Email" 
      value={values.email}
      onChangeText={handleChange('email')}
      onBlur={() => setFieldTouched('email')}
      />
      {touched.email && errors.email && (
        <Text style={MainStyles.errorTxt}>{errors.email}</Text>
      )}
      

      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Login'); Alert.alert('Recovery code has been sent!') }} 
      disabled={!isValid || !dirty}
      >
        <Text style={MainStyles.textColor}>Send Recovery Code</Text>
      </TouchableOpacity>

    
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Login')} >
        <Text>Return</Text>
      </TouchableOpacity>
    </View>
    )}
    </Formik>
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
