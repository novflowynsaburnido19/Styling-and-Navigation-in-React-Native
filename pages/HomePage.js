import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons

const HomePage = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#13F1FC', '#0470DC']}
      style={[MainStyles.container, styles.container]}
    >
      <Image style={MainStyles.logo} source={require('../assets/wow.png')} />
      
      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          {/* <AntDesign name="heart" size={24} color="black" /> */}
        </View>
        <Text style={styles.title}>{"Personal Details:"}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"Nov Flowyn S. Saburnido"}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="book" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"BSIT - 3R4"}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="email" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"novflowyn777@gmail.com"}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="home" size={24} color="black" />
        </View>
        <Text style={styles.textBody}>{"Cogon Gitagum, Mis. Or."}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="pencil" size={24} color="black" />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textBody}>{"Student"}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('See')}>
            <Text style={{ color: 'black', marginLeft: 87, alignItems: 'center', textDecorationLine: 'underline'}}>See More...</Text>
      </TouchableOpacity>

      <TouchableOpacity style={MainStyles.buttonvis} onPress={() => navigation.navigate('Landing')}>
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" style={styles.icon} />
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
    marginBottom: 8,
    marginLeft: -10,
  },
  iconContainer: {
    marginRight: 6,
  },
  title:{
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
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
