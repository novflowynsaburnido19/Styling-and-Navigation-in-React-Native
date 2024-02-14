import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#13F1FC', '#0470DC']}
      style={[MainStyles.container, styles.container]}>
      <Image style={MainStyles.logo} source={require('../assets/wow.png')} />
      
      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="user" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"Nov Flowyn S. Saburnido"}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="book" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"BSIT - 3R4"}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="mail" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"novflowyn777@gmail.com"}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="home" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"Cogon Gitagum, Mis. Or."}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="team" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"Student"}</Text>
      </View>

      <TouchableOpacity style={MainStyles.buttonvis} onPress={() => navigation.navigate('Landing')}>
        <View style={styles.buttonContent}>
          <AntDesign name="arrowleft" size={24} color="black" style={styles.icon} />
          <Text style={MainStyles.textColor}>Return</Text>
        </View>
      </TouchableOpacity>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'left', 
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    marginBottom: 6,
    marginLeft: -10,
  },
  iconContainer: {
    marginRight: 6,
  },
  textBody:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginRight: -15,
    marginTop: 1,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

export default HomePage;
