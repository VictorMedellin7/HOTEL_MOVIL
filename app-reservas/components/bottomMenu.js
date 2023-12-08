import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigateToScreen('Favorites')}>
        <Icon name="heart" size={20} color="#000" />
        <Text style={styles.menuText}>Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigateToScreen('HomeScreen')}>
        <Icon name="calendar" size={20} color="#000" />
        <Text style={styles.menuText}>Reservar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigateToScreen('HistoryScreen')}>
        <Icon name="history" size={20} color="#000" />
        <Text style={styles.menuText}>Historial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigateToScreen('ProfileScreen')}>
        <Icon name="user" size={20} color="#000" />
        <Text style={styles.menuText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.2;

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '10%',
    width: '107%',
  },
  menuButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    width: buttonWidth,
  },
  menuText: {
    color: '#000',
    fontSize: 15,
    marginTop: 5,
  },
});

export default Menu;
