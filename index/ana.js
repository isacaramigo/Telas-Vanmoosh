import { StatusBar } from 'expo-status-bar';
import { View, Image, Text} from 'react-native';
import { styles } from '../style/agregado.js';

export default function Ana() {
  return (
    <View style={styles.container}>
       <Pressable><Text style={styles.voltar}>voltar</Text></Pressable>
      <Image
        style={styles.logo}
        source={require('./assets/image/logoVanmooshFundoTransparente.png')}
      />
      <View style={styles.linha1}></View>
      <StatusBar style="auto" />

      <Text style={styles.nome}>Ana</Text>
      <View style={styles.corpo}>
        <View style={styles.fundo}>
          <Text style={styles.bq}>Colégio Politécnico Bento Qurino</Text>
          <Text style={styles.Hb}>Horário de embarque: <Text style={styles.hr}>06:40</Text></Text>
          <Text style={styles.Hb}>Horário de chegada: <Text style={styles.hr}>13:30</Text></Text>
        </View>
        <View style={styles.fundo}> 
          <Text style={styles.Hb}>Local de embarque: <Text style={styles.hr}>Av. Dr. Nelson Noronha Gustavo Filho, 150 - Vila Brandina, Campinas - SP, 13092-526</Text></Text>
          <Text style={styles.Hb}>Local de desembarque: <Text style={styles.hr}>Av. Dr. Nelson Noronha Gustavo Filho, 150 - Vila Brandina, Campinas - SP, 13092-526</Text></Text>
        </View>
        <View style={styles.fundo}> 
        <Text style={styles.moto}>Informações sobre o Motorista</Text>
        <Text style={styles.Hb}>Nome: <Text style={styles.hr}>Mauricio de Sousa</Text></Text>
        <Text style={styles.Hb}>Idade: <Text style={styles.hr}>43 anos</Text></Text>
        <Text style={styles.Hb}>Passageiros: <Text style={styles.hr}>10 passageiros</Text></Text>
        </View>  
      </View>
    </View>
    
  );
}
  