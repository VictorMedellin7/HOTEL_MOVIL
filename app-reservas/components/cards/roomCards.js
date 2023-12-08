import { Text,TouchableOpacity,Icon,Button } from "react-native-elements";

export const RoomCard = ({ room, onSelect }) => {
    return (
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
            <Button title="Seleccionar" onPress={() => onSelect(room)} />
        </TouchableOpacity>
    );
};
