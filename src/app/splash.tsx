import { View, Text, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { router } from 'expo-router'

export default function splash() {
    useEffect(()=>{
        const tiempo=setTimeout(()=>{
            router.replace('/(drawer)/inicio')
        },5000)
        return ()=>clearTimeout(tiempo);
    },[]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>APLICACIONES MOVILES</Text>

    <Text style={styles.texto}>Cargando Aplicacion...</Text>
    <Text style={styles.texto}>De: Joseph Aguilar Olano</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
    },
    texto: {
        fontSize: 18,
        color: 'red',
        marginTop: 20,
    },
})