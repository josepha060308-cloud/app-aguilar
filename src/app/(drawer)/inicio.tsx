import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';

const index = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Viajeros del mundo</Text>
      <Text style={styles.parrafo}>Descubre nuevos lugares, conoce diferentes culturas
          y disfruta de nuevas aventuras.</Text>
      <Text style={{textAlign: 'center'}}>
      <Image source={require('@/assets/images/icon.png')} style={{width:300, height:250}}></Image>
      </Text>

      <View style={styles.tarjeta}>
          <Text style={styles.subtitulo}>¿Que encontraras?</Text>
          <Text style={styles.parrafo}>
            - Lugares para visitar.
          </Text>
          <Text style={styles.parrafo}>
            - Ideas para tus viajes.
          </Text>
          <Text style={styles.parrafo}>
            - Nuevas experiencias.
          </Text>
        </View>


      <TouchableOpacity style={styles.boton} onPress={()=>router.push('/contactos')}>
        <Text style={{textAlign: 'center', color: 'white'}}>Contactanos</Text>
      </TouchableOpacity>

    <View style={styles.pie}>
      <Text style={styles.texto}>Creado por Joseph Aguilar</Text>
    </View>

    </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  parrafo: {
    fontSize: 14,
    lineHeight: 30,
  },
  boton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
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
  tarjeta: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#173B57',
  },
})