import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import MainStyles from '../components/config/styles';

const HomePage = ({ navigation }) => {
  return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/flow.png')} />
      <Text style={styles.textBody}>"Welcome to a Gallery of Multimedia Masterpiece"</Text>
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => navigation.navigate('Landing')} >
        <Text style={MainStyles.textColor}>Home</Text>
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
    marginBottom: 20,
  },
  textBody:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default HomePage;
