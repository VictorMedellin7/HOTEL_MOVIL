import React, { useState, useEffect  } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Menu from './bottomMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';

export const HomeScreen = ({ route, navigation }) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);

  useEffect(() => {
    const { params } = route;
    if (params && params.selectedMunicipio) {
      setSelectedMunicipio(params.selectedMunicipio);
    }
  }, [route]);

  const goToDestination = () => {
    navigation.navigate('Search');
  };

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const handleSelectDates = () => {
    console.log('Fechas seleccionadas:', selectedDates);
    toggleCalendar();
  };

  const search = () => {
    console.log('Realizando búsqueda...');
    if (selectedMunicipio && selectedMunicipio.name) {
      console.log('Municipio seleccionado:', selectedMunicipio.name);
    } else {
      console.log('Ningún municipio seleccionado o sin nombre.');
    }
    navigation.navigate('SelectHotel');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>AlojaBaja Sur</Text>

      <TouchableOpacity style={styles.button} onPress={goToDestination}>
        <Icon name="plane" size={20} color="#fff" />
        <Text style={styles.buttonText}>
          {selectedMunicipio ? selectedMunicipio.name : 'A donde vamos?'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={toggleCalendar}>
        <Icon name="calendar" size={20} color="#fff" />
        <Text style={styles.buttonText}>Calendario</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={search}>
        <Icon name="search" size={20} color="#fff" />
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <Menu />

      <Modal isVisible={isCalendarVisible} onBackdropPress={toggleCalendar}>
        <View style={styles.modalContainer}>
          <Calendar
            onDayPress={(day) => {
              const { dateString } = day;
              setSelectedDates({ ...selectedDates, [dateString]: { selected: true } });
            }}
          />
          <TouchableOpacity style={styles.selectDatesButton} onPress={handleSelectDates}>
            <Text style={styles.selectDatesButtonText}>Seleccionar fechas</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1F68',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    marginBottom: 80,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  selectDatesButton: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  selectDatesButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});