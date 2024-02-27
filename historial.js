import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Historial() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Image source={require('./src/historial.jpg')} style={styles.logo} />
        <Text style={styles.titulo}>Historial del invernadero</Text>
      </View>

      <View style={styles.historialContainer}>
        <View style={styles.historialTableContainer}>
          <Text style={styles.tableTitle}>Fecha y Hora</Text>
          <Text style={styles.tableTitle}>Temperatura</Text>
          <Text style={styles.tableTitle}>Humedad</Text>
        </View>

        <View style={styles.historialTableContainer}>
          <Text style={styles.tableData}>2024-01-28 12:00 PM</Text>
          <Text style={styles.tableData}>25°C</Text>
          <Text style={styles.tableData}>97%</Text>
        </View>

        <View style={styles.historialTableContainer}>
          <Text style={styles.tableData}>2024-01-28 10:00 PM</Text>
          <Text style={styles.tableData}>23°C</Text>
          <Text style={styles.tableData}>87%</Text>
        </View>

        <View style={styles.historialTableContainer}>
          <Text style={styles.tableData}>2024-01-28 15:00 AM</Text>
          <Text style={styles.tableData}>19°C</Text>
          <Text style={styles.tableData}>50%</Text>
        </View>

        <View style={styles.historialTableContainer}>
          <Text style={styles.tableData}>2024-01-28 19:00 AM</Text>
          <Text style={styles.tableData}>12°C</Text>
          <Text style={styles.tableData}>34%</Text>
        </View>

      </View>

      <TouchableOpacity style={styles.regresarContainer} onPress={() => navigation.navigate('Main')}>
        <Image source={require('./src/Regresar.jpg')} style={styles.regresarImagen} />
        <Text style={styles.descripcion}>Regresar al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DBFF7',
  },
  encabezado: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  historialContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  historialTableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  tableData: {
    fontSize: 16,
    flex: 1,
  },
  regresarContainer: {
    alignItems: 'center',
  },
  regresarImagen: {
    width: 100,
    height: 100,
  },
  descripcion: {
    marginTop: 10,
    fontSize: 16,
  },
});
