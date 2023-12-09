import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const RegisterScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [curp, setCurp] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    const toggleMostrarContrasena = () => {
        setMostrarContrasena(!mostrarContrasena);
    };

    const handleRegistro = () => {

        console.log('Registro:', {
            nombre,
            apellidos,
            email,
            curp,
            telefono,
            contrasena,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 34, color: '#fff' }}>Crear cuenta</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellidos"
                value={apellidos}
                onChangeText={setApellidos}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="CURP"
                value={curp}
                onChangeText={setCurp}
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
            />


            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={contrasena}
                    onChangeText={setContrasena}
                    secureTextEntry={!mostrarContrasena}
                />
                <TouchableOpacity style={{ padding: 10 }} onPress={toggleMostrarContrasena}>
                    <Icon name={mostrarContrasena ? 'eye' : 'eye-slash'} size={20} color="#000" />
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.btn} onPress={handleRegistro} >
                <Text style={styles.textBtn}>Crear</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate('LoginScreen')}
            >
            <Text style={{ color: '#fff' }}>Ya tienes una cuenta?</Text>

            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F1F68',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 25
    },
    input: {
        backgroundColor: '#fff',
        height: 49,
        width: '85%',
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 20,
        borderRadius: 15,
        textAlign: 'center'
    },
    textBtn: {
        color: '#fff',
        borderWidth: 2,
        backgroundColor: '#3498db',
        padding: 20,
        borderRadius: 25,
        textAlign: 'center',
        fontSize: 22

    },
    btn: {
        marginTop: '10%',
        width: '40%'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderRadius: 15,
        width: '85%',
        backgroundColor: '#fff'
    },
});

