import { StyleSheet, Text, View, ScrollView  } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { HotelCards } from './cards/hotelCards';

export function SelectHotelScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Text style={styles.alojaText}>Aloja Baja Store</Text>
            <View style={styles.barra}>
                <Text style={styles.text_h}>
                    Ordenar
                </Text>
                <Entypo
                    style={styles.icon}
                    name="select-arrows"
                    size={28}
                    color="black" />


            </View>

        
        <HotelCards></HotelCards>
        <HotelCards></HotelCards>
        <HotelCards></HotelCards>
        <HotelCards></HotelCards>
        </View>
        </ScrollView>);
        
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F1F68', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        paddingTop: 60, 
      },
      
    text_h: {
        fontSize: 15,
        width: '70%',
        marginLeft: '10%',
        backgroundColor: '#fff',
        color: '#000',
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
        marginTop: '5%',
        textAlign: 'center',
      },
})