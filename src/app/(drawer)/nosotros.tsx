import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const nosotros = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Nosotros</Text>
      
      <Text style={{textAlign: 'center'}}>
      <Image source={require('@/assets/images/favicon.png')} style={{width:300, height:250}}></Image>
      </Text>
      
      <Text style={styles.parrafo}>Viajeros del mundo es una aplicación para las personas
          que disfrutan viajar, conocer lugares y aprender sobre
          diferentes culturas.</Text>

      <View style={styles.tarjeta}>
          <Text style={styles.subtitulo}>Nuestra misión</Text>
          <Text style={styles.parrafo}>
            Motivar a las personas a descubrir nuevos destinos
            y disfrutar de cada aventura.
          </Text>
        </View>

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.boton} onPress={()=>alert('¡Hola Mundo...!')}>Explorar</Text>
        </TouchableOpacity>
      
      <View style={styles.pie}>
          <Text style={styles.texto}>Creado por Joseph Aguilar</Text>
        </View>

    </View>
    </ScrollView>
  )
}

export default nosotros

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
    color: 'white',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#246B75',
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
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
})