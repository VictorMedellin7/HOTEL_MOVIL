import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { rooms } from './tiposHabitaciones/roomsTypes';

import { View, Text, TouchableOpacity,StyleSheet, ScrollView } from 'react-native';

const RoomCard = ({ room, onSelect }) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    backgroundColor: room.isSelected ? '#D3D3D3' : 'white',
                    padding: 16,
                    margin: 8,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#0F1F68',
                }}
                onPress={() => onSelect(room)}
            >
                <Text style={{ color: '#0F1F68', fontSize: 18, fontWeight: 'bold' }}>{room.name}</Text>
                <Text>
                    <Icon name="users" size={16} /> Capacidad: {room.capacity} personas
                </Text>
                <Text>
                    <Icon name="bed" size={16} /> Tipo de cama: {room.bedType}
                </Text>
                <Text>
                    <Icon name="arrows-alt" size={16} /> Medidas: {room.dimensions}
                </Text>
                <Text>
                    <Icon name="cutlery" size={16} /> {room.includesMeals ? 'Incluye comida' : 'Sin comida'}
                </Text>
                <Text>
                    <Icon name="wifi" size={16} /> {room.includesWifi ? 'Wifi incluido' : 'Sin wifi'}
                </Text>
                <Text>
                    <Icon name="snowflake-o" size={16} /> {room.includesAirConditioning ? 'Aire acondicionado incluido' : 'Sin aire acondicionado'}
                </Text>
                <Text>
                    <Icon name="bath" size={16} /> {room.privateBathroom ? 'Baño privado' : 'Baño compartido'}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                    <Icon name="dollar" size={16} /> Precio: {room.price} $
                </Text>

            </TouchableOpacity>
        </View>
    );
};


export function SelectRoomScreen({ navigation }) {
    const [selectedRoom, setSelectedRoom] = useState(null);
    
    const handleSelectRoom = (selectedRoom) => {
        rooms.forEach((room) => {
            room.isSelected = false;
        });

        selectedRoom.isSelected = true;
        setSelectedRoom(selectedRoom);
    };

    const handleReserveRoom = () => {
        console.log('Habitación reservada:', selectedRoom);
    };

    const handleCancelReserve = () => {
        setSelectedRoom(null);
    };

    return (
        <View style={{ backgroundColor: '#0F1F68', padding: 20, flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, marginBottom: 20, marginTop: '10%' }}>
                <Text style={{ color: '#0F1F68', fontSize: 24, fontWeight: 'bold' }}>Elige tu habitación</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                {rooms.map((room, index) => (
                    <RoomCard key={index} room={room} onSelect={handleSelectRoom} />
                ))}
            </ScrollView>
            {selectedRoom && (
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#E9E9E9', padding: 30, borderRadius: 12, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <View>
                        <Text style={{ color: '#0F1F68', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{selectedRoom.name}</Text>
                        <Text style={{ marginBottom: 15, }}>Precio: {selectedRoom.price} $</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 60 }}>
                    <TouchableOpacity onPress={handleCancelReserve} >
                            <Text style={styles.btnCancel}>Cancelar</Text>
                        </TouchableOpacity>
                        <View style={{ marginRight: 40 }}>
                            <TouchableOpacity
                                onPress={handleReserveRoom}>
                                <Text style={styles.btnReser}>reservar</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({

    btnCancel:{
        borderColor:'red',
        borderWidth:2,
        padding:18,
        borderRadius:20,
        textAlign:'center',
        width:'auto',
        color:'#fff',
        fontSize:18,
        marginLeft:'20%',
        backgroundColor:'#991010'
    },
    btnReser:{
        borderColor:'green',
        borderWidth:2,
        padding:18,
        borderRadius:20,
        marginLeft:'30%',
        textAlign:'center',
        width:'auto',
        color:'#fff',
        fontSize:18,
        backgroundColor:'#109910'

        

    }
})