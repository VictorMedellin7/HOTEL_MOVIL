import {CardHotel} from './cards/hotelCards'
import { StyleSheet, Text, View, Pressable } from 'react-native'

import { Entypo } from '@expo/vector-icons';

export function SelectHotelScreen({ navigation }) {
    return (
        <View>
            <Text style={styles_h.alojaText}>Aloja Baja Store</Text>
            <View style={styles_h.barra}>
                <Text style={styles_h.text_h}>
                    Ordenar
                </Text>
                <Entypo
                    style={styles_h.icon}
                    name="select-arrows"
                    size={28}
                    color="black" />

            </View>
            
        </View>);
}
const styles_h = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F1F68',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
    },
    text_h: {
        fontSize: 52,
        width: '70%',
        marginLeft: '10%',
        backgroundColor: '#fff',
        marginTop: '10%'

    },
    barra: {
        width: '100%',
        height: '5%',
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    title: {
        fontSize: 33,
        color: '#fff',
    },
    icon: {
        top: 0
    },
    alojaText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
})