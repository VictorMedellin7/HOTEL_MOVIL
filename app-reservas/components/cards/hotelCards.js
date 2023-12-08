import { Pressable, StyleSheet, View, Text } from 'react-native'

export function CardHotel({navigation}) {
    return (

        <View style={styles.card}>
            
            <Pressable >

                <Text>
                    siiii
                </Text>
            </Pressable>

        </View>
    );

}
const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: '20%',
        borderRadius: 30,
        backgroundColor: '#172c70',
        borderWidth: 1,
        borderColor: '#ffff',
    },
    img: {
        width: '90%',
        borderWidth: 2,
        borderColor: 'red'
    }
})