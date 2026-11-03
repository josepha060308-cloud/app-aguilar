import { Drawer } from 'expo-router/drawer';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="inicio" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon:({color})=>(<FontAwesome name='user' size={24} color={'skyblue'}></FontAwesome>)
        }}
      />
      <Drawer.Screen
        name="nosotros" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Nosotros',
          title: 'Nosotros',
          drawerIcon:({color})=>(<FontAwesome name='suitcase' size={24} color={'red'}></FontAwesome>)
        }}
      />
      <Drawer.Screen
        name="contactos" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Contactos',
          title: 'Contactos',
          drawerIcon:({color})=>(<FontAwesome name='comment' size={24} color={'yellow'}></FontAwesome>)
        }}
      />

      <Drawer.Screen
        name="acerca" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Acerca',
          title: 'Acerca',
          drawerIcon:({color})=>(<FontAwesome name='info-circle' size={24} color={'orange'}></FontAwesome>)
        }}
      />

        

    </Drawer>
  );
}
