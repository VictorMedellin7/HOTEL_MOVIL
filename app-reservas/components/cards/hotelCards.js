import { Pressable, StyleSheet, View, Text ,Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export function HotelCards({ navigation }) {
    return (
      <View style={styles.card}>
        <Pressable
          onPress={() => {
            navigation.navigate('SelectRoomScreen');
          }}
          style={styles.pressable}
        >
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={{
                uri:
                  'https://images.trvl-media.com/hotels/8000000/8000000/7999600/7999554/7446fb39_w.jpg',
              }}
            />
          </View>
      );
  
          <View style={styles.contentContainer}>
            <Text style={styles.hotelName}>Hotel Juan</Text>
            <View style={styles.rate}>
              <Text style={styles.rateText}>8.3</Text>
            </View>
            <Text style={styles.description}>
              Using Lorem ipsum to focus attention on graphic elements in a webpage
              design proposal·
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