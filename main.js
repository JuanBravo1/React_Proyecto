import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Main() {
    
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Image source={require('./src/1a.jpg')} style={styles.logo} />
        <Text style={styles.titulo}>Mi Invernadero Inteligente</Text>
      </View>

      <View style={styles.estados}>
        <View style={styles.estado}>
          <Text style={styles.h2}>Temperatura del invernadero</Text>
          <Text style={styles.valor}>20°C</Text>
        </View>

        <View style={styles.estado}>
          <Text style={styles.h2}>Humedad del invernadero</Text>
          <Text style={styles.valor}>80%</Text>
        </View>

        <View style={styles.estado}>
          <Text style={styles.h2}>Estado del suelo</Text>
          <Text style={styles.valor}>Bueno</Text>
        </View>
      </View>

      <View style={styles.imagenes}>
        <TouchableOpacity style={styles.imagen} onPress={() => {}}>
          <Image source={require('./src/Ventanas.jpg')} style={styles.imagenItem} />
          <Text style={styles.descripcion}>Abrir/Cerrar ventanas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imagen} onPress={() => {}}>
          <Image source={require('./src/Regar.jpg')} style={styles.imagenItem} />
          <Text style={styles.descripcion}>Iniciar/Detener riego</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imagen} onPress={() => navigation.navigate('Historial')}>
          <Image source={require('./src/imgHistorial.jpg')} style={styles.imagenItem} />
          <Text style={styles.descripcion}>Historial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    backgroundColor: '#5DBFF7',
  },
  encabezado: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  estados: {
    marginBottom: 20,
  },
  estado: {
    marginBottom: 10,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 16,
  },
  imagenes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  imagen: {
    alignItems: 'center',
    marginBottom: 20,
    width: '30%', // Ajusta según el diseño deseado
  },
  imagenItem: {
    width: '100%', // Ajusta según el diseño deseado
    height: 150, // Ajusta según el diseño deseado
  },
  descripcion: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
