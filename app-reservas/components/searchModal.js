import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';


export const Search = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);

  const handleMunicipioSelection = (selectedMunicipio) => {
    navigation.navigate('HomeScreen', { selectedMunicipio });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.64:6969/api/munis');
        setSearchResults(response.data.munis);
      } catch (error) {
        console.error('Error al obtener datos XD:', error);
      }
    };

    fetchData();
  }, []);

  const renderMunicipios = ({ item }) => (
    <TouchableOpacity onPress={() => handleMunicipioSelection(item)}>
      <View style={styles.municipioItem}>
        <Text style={styles.municipioName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id_municipio.toString()}
        renderItem={renderMunicipios}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0F1F68',
    paddingTop: 50,
  },
  municipioItem: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
  },
  municipioName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});