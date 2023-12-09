import React, {useEffect, useState} from 'react';
import { Pressable, StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export function HotelCards({ navigation }) {
  
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.64:6969/api/hotels');
        setSearchResults(response.data[0]);
        console.log(response.data[0]);
        console.log("Nombre del hotel:", response.data[0].name);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => {
          navigation.navigate('SelectRoom');
        }}
        style={styles.pressable}
      >
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.trvl-media.com/hotels/8000000/8000000/7999600/7999554/7446fb39_w.jpg',
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.hotelName}>{searchResults.name}</Text>
          <View style={styles.rate}>
            <Text style={styles.rateText}>8.3</Text>
          </View>
          <Text style={styles.description}>{searchResults.description}
          </Text>
        </View>
        <AntDesign style={styles.heartIcon} name="hearto" size={28} color="black" />
      </Pressable>
      <View style={styles.pricesContainer}>
        <Text style={styles.pricesText}>MXN 1,200 - 6,400</Text>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const imgContainerWidth = width * 0.35;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    overflow: 'hidden',
    paddingLeft: 5,
    paddingTop: 5,
  },
  pressable: {
    flexDirection: 'row',
  },
  imgContainer: {
    width: imgContainerWidth,
    height: 150,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  rate: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 5,
  },
  rateText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
    marginBottom:30,
  },
  heartIcon: {
    marginTop: '2%',
    marginRight: '5%',
  },
  pricesContainer: {
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 5,
    width: 128,
    height: 30,
  },
  pricesText: {
    color: 'green',
    textAlign: 'center',
  },
});