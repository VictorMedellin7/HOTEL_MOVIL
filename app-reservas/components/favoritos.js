import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Menu from './bottomMenu';


export const Favorites = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>AlojaBaja Sur</Text>
            <Image
                source={require('../assets/hotel.png')}
                style={styles.image}
            />
            <Text style={styles.description}>
                Reserva un rincón especial para tus preferidos: guarda aquí todo lo que amas para disfrutarlo más tarde
            </Text>
            <Menu />
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
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: '#9B9B9B',
    },
    menuContainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '10%',
        width: '111%',
    },
    menuButton: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    menuText: {
        color: '#000',
        fontSize: 15,
        marginTop: 5,
    },
});


