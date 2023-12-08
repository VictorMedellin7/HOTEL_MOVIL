import { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

export const RegisterScreen = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [curp, setCurp] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasena, setContrasena] = useState('');

    const RegisterSchema = Yup.object().shape({
        nombre: Yup.string().required('Campo requerido'),
        apellidos: Yup.string().required('Campo requerido'),
        email: Yup.string().email('Correo electrónico no válido').required('Campo requerido'),
        curp: Yup.string().required('Campo requerido'),
        telefono: Yup.string().matches(/^\d{10}$/, 'Teléfono inválido').required('Campo requerido'),
        contrasena: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Campo requerido'),
    });

    const handleRegistro = () => {
        // Aquí puedes realizar la lógica de registro, como enviar los datos a un servidor
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
        <View style={styles.container}> <Formik
            initialValues={{
                nombre: '',
                apellidos: '',
                email: '',
                curp: '',
                telefono: '',
                contrasena: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleRegistro}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text style={styles.makeAcountText}>Crea una cuenta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        onChangeText={handleChange('nombre')}
                        onBlur={handleBlur('nombre')}
                        value={values.nombre}
                    />
                    {touched.nombre && errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}

                    {/* Repite lo mismo para los demás campos */}

                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 22 }}>Crear cuenta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ marginTop: '6%', color: '#fff' }}>¿Ya tienes una cuenta?</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#0F1F68',
        gap: 40
    },
    input: {
        height: 59,
        width: '80%',
        backgroundColor: '#fff',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 23

    },

    btn: {
        marginTop: '10%',
        borderRadius: 18,
        width: '35%',
        padding: '3%',
        backgroundColor: '#3468db',
    },
    makeAcountText: {
        color: '#fff',
        fontSize: 33

    }
});


