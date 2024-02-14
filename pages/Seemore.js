import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Seemore = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#13F1FC', '#0470DC']}
      style={[MainStyles.container, styles.container]}
    >
      {/* <Image style={MainStyles.logo} source={require('../assets/hehe.png')} /> */}
      
      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          {/* <AntDesign name="heart" size={24} color="black" /> */}
        </View>
        <Text style={styles.title}>{"Hobbies and Interests:"}</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="controller-classic" size={24} color="black" /> 
        </View>
        <Text style={styles.textBody}>Play video games</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="camera" size={24} color="black" /> 
        </View>
        <Text style={styles.textBody}>Photography</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="film" size={24} color="black" /> 
        </View>
        <Text style={styles.textBody}>Videography</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="laptop" size={24} color="black" /> 
        </View>
        <Text style={styles.textBody}>Photo & video editing</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="movie" size={24} color="black" /> 
        </View>
        <Text style={styles.textBody}>Watch movies or shows</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="music" size={24} color="black" /> 
        </View>
        <Text style={styles.textBody}>Listen to music</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="basketball" size={24} color="black" /> 
        </View>
        <Text style={styles.textBody}>Play sports</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="pencil" size={24} color="black" /> 
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textBody}>Write stories</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="microphone" size={24} color="black" /> 
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textBody}>Singing</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="car" size={24} color="black" /> 
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textBody}>Joy rides/Travelling</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="heart" size={24} color="black" /> 
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textBody}>Hanging out with friends</Text>
        </View>
      </View>

      <TouchableOpacity style={MainStyles.buttonvis} onPress={() => navigation.navigate('Home')}>
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
    marginBottom: 10,
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
  title:{
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

export default Seemore;
