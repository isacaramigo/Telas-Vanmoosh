import { View, Text, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './style/home.js';

export default function App() {
    return(
        <View style={styles.container}>
        <StatusBar style="auto"/>
        

        <Image
        style={styles.logo}
        source={require('./assets/image/logoVanmooshFundoTransparente.png')}
      />
                <View style={styles.linha1}></View>
            <Pressable><Text style={styles.agregado}>Ana</Text></Pressable>
            <View style={styles.linha2}></View>
            <Pressable><Text style={styles.agregado}>João</Text></Pressable>
        </View>
    );
}