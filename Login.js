import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Login() {
  const [correo, setCorreo] = React.useState('');
  const [contraseña, setContraseña] = React.useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Image source={require('./src/1a.jpg')} style={styles.logo} />
        <Text style={styles.titulo}>Mi Invernadero Inteligente</Text>
      </View>

      <View style={styles.estados}>
        <View style={styles.estado}>
          <View style={styles.miFormulario}>
            <Text style={styles.label}>Correo Electrónico:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setCorreo}
              value={correo}
              placeholder="Correo Electrónico"
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setContraseña}
              value={contraseña}
              placeholder="Contraseña"
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.link}>¿Aún no tienes cuenta? Regístrate aquí</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  encabezado: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
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
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
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
  link: {
    marginTop: 20,
    color: 'blue',
  },
});
