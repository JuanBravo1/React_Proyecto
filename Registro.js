import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Registro() {
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const [nombre, setNombre] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [edad, setEdad] = React.useState('');

  const handleSubmit = () => {
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Teléfono:', telefono);
    console.log('Edad:', edad);
  };

  return (
    <ImageBackground source={require('./src/main.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Mi Invernadero Inteligente</Text>
        </View>

        <View style={styles.estados}>
          <View style={styles.estado}>
            <View style={styles.miFormulario}>
              <Text style={styles.label}>Nombre:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setNombre}
                value={nombre}
                placeholder="Nombre"
                autoCapitalize="none"
                autoFocus={true}
              />

              <Text style={styles.label}>Correo Electrónico:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setCorreo}
                value={correo}
                placeholder="Correo Electrónico"
                keyboardType="email-address"
              />

              <Text style={styles.label}>Teléfono:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setTelefono}
                value={telefono}
                placeholder="Teléfono"
                keyboardType="phone-pad"
              />

              <Text style={styles.label}>Edad:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setEdad}
                value={edad}
                placeholder="Edad"
                keyboardType="numeric"
              />

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
            </View>

            
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>¿Ya tienes cuenta? Dirígete aquí</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 35,
  },
  encabezado: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  estados: {
    flex: 1,
    justifyContent: 'center',
  },
  estado: {
    alignItems: 'center',
  },
  miFormulario: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color:'#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link:{
    color: '#fff',
    paddingTop: 10,
  },
});
