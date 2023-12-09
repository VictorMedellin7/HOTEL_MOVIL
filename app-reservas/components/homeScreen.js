import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Menu from './bottomMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';
import {data} from '../data/api'

export const HomeScreen = ({ navigation }) => {
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [isDestinationVisible, setDestinationVisible] = useState(false);
    const [selectState, setSelectEstate] = useState();
    const [selectMunicipio, setSelectMunicipio] = useState();
    const [selectedDates, setSelectedDates] = useState({});
    const [data,setData] = useState('')
    
    const goToDestination = () => {
        navigation.navigate('Search');
    };

    const toggleDestination = () => {
        setDestinationVisible(!isDestinationVisible);
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
    };

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>AlojaBaja Sur 
            {data[0]}
            </Text>

            <TouchableOpacity style={styles.button} onPress={toggleDestination}>
                <Icon name="plane" size={20} color="#fff" />
                <Text style={styles.buttonText}>A donde vamos?
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


            <Modal isVisible={isDestinationVisible} onBackdropPress={toggleDestination}>

                <View style={styles.modalContainer}>

                    <Text style={{ textAlign: 'center', justifyContent: 'center' }}>Seleccciona un estado:</Text>

                    <Picker
                        selectedValue={selectState}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectEstate(itemValue)
                            
                        }
                        }
                        itemStyle={{ backgroundColor: "black" }}
                    >
                        


                    </Picker>


                    <Text style={{ textAlign: 'center' }}>Municipio:</Text>
                    <Picker

                        selectedValue={selectMunicipio}
                        onValueChange={(itemValue, itemIndex) => setSelectMunicipio(itemValue)}
                        itemStyle={{ backgroundColor: "white" }}
                    >

                        <Picker.Item label='jorele' value='valor' />

                    </Picker>
                </View>
            </Modal>

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
        justifyContent: 'center',
        gap: 30
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
