
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Acerca() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Acerca de</Text>

        <FontAwesome name="user-circle" size={70} color="#168AAD" style={{ alignSelf: 'center', margin: 20 }}></FontAwesome>

        <View style={styles.tarjeta}>
          <Text style={styles.subtitulo}>Sobre la aplicacion</Text>
          <Text style={styles.parrafo}>
            Viajeros del mundo es una aplicación móvil que busca
            motivar a las personas a conocer nuevos destinos,
            culturas y experiencias.
          </Text>
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.subtitulo}>Tecnologias utilizadas</Text>
          <Text style={styles.parrafo}>- React Native: para crear la aplicación.</Text>
          <Text style={styles.parrafo}>- TypeScript: para escribir el codigo.</Text>
          <Text style={styles.parrafo}>- Expo Router: para navegar entre pantallas.</Text>
        </View>

        <View style={styles.pie}>
            <Text style={styles.texto}>Creado por Joseph Aguilar</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F6FA',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#173B57',
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#168AAD',
    marginBottom: 10,
  },
  parrafo: {
    fontSize: 14,
    lineHeight: 25,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#173B57',
    marginBottom: 8,
  },
  texto: {
    color: 'white',
    margin: 3,
  },
  pie: {
    backgroundColor: '#173B57',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
});
