
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Linking} from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const contactos = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const enviar = () => {
    if (nombre === '' || apellido === '') {
      alert('Completa tu nombre y apellido');
    } else {
      alert('Se envió correctamente');
    }
  };

  const limpiar = () => {
    setNombre('');
    setApellido('');
    alert('Se limpiaron los campos');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Contactos</Text>

      <Image source={require('@/assets/images/react-logo.png')} style={{width:350, height: 150, resizeMode: 'contain'}}></Image>

      <Text style={styles.parrafo}>
        Si deseas comunicarte con nosotros, completa tus datos.
      </Text>

      <View style={styles.formulario}>
        <TextInput
          placeholder='Escribe tu nombre'
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          placeholder='Escribe tu apellido'
          style={styles.input}
          value={apellido}
          onChangeText={setApellido}
        />

        <TouchableOpacity style={styles.boton} onPress={enviar}>
          <Text style={{textAlign: 'center', color: 'white'}}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonLimpiar} onPress={limpiar}>
          <Text style={{textAlign: 'center', color: 'white'}}>Limpiar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitulo}>Nuestras redes sociales</Text>

      <View style={styles.redes}>
        <FontAwesome style={styles.icono} name='facebook' size={25} color={'blue'} onPress={() => Linking.openURL('https://www.facebook.com')}></FontAwesome>

        <FontAwesome style={styles.icono} name='youtube' size={25} color={'red'} onPress={() => Linking.openURL('https://www.youtube.com')}></FontAwesome>

        <FontAwesome style={styles.icono} name='twitter' size={25} color={'blue'} onPress={() => Linking.openURL('https://x.com')}></FontAwesome>
      </View>

      <View style={styles.pie}>
        <Text style={styles.texto}>Creado por Joseph Aguilar</Text>
      </View>

    </View>
    </ScrollView>
  )
}

export default contactos

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
  botonLimpiar: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  formulario: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  redes: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  icono: {
    backgroundColor: 'black',
    color: 'white',
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#173B57',
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
