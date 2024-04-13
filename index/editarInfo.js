import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './style/editarInfo.js';

export default function Edit() {
    return(
        <View style={styles.container}>
         <Pressable style={styles.volta}> 
          <Image
        style={styles.voltar}
        source={require('./assets/image/Icone-voltar.png')}
      />
      </Pressable>
            <Text style={styles.titulo}>Editar Perfil</Text>
                <View style={styles.linha1}></View>
            <StatusBar style="auto"/>
            <Pressable><Text style={styles.agregado}>> Ana</Text></Pressable>
            <View style={styles.linha2}></View>
            <Pressable><Text style={styles.agregado}>> João</Text></Pressable>
        </View>
    );
}