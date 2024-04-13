import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, Pressable} from 'react-native';
import { styles } from './style/conta.js';

export default function Cota() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Julia Azevedo</Text>
      <Image
            style={styles.perfil}
            source={require('./assets/image/Icone-FotoPerfil.png')}
            />
      <View style={styles.div1}>
      <Image
            style={styles.ajuda}
            source={require('./assets/image/Icone-Ajuda.png')}
            />
        <Text style={styles.help}>Ajuda</Text>
      </View>

      <View style={styles.div3}>
        <Text style={styles.filho}>Adicionar filho(a)</Text>
      </View>


      <View style={styles.div2}>
      <Image
            style={styles.configuraçao}
            source={require('./assets/image/Icone-Configuração.png')}
            />
        <Text style={styles.config}>Configurações</Text>
      </View>

      <View style={styles.div4}>
        <Text style={styles.pagamento}>Pagamento</Text>
      </View>

      <Pressable style={styles.menu}>
            <Image
              style={styles.editar}
              source={require('./assets/image/Icone-edição.png')}
            />
        <Text style={styles.editInfo}>Editar informações</Text>
      </Pressable>

      <Pressable style={styles.menu}>
            <Image
              style={styles.Compartilhar}
              source={require('./assets/image/Icone-Compartilhar.png')}
            />
        <Text style={styles.compartilhe}>Compartilhe e ganhe desconto!</Text>
      </Pressable>

      <Pressable style={styles.menu}>
            <Image
              style={styles.Juridico}
              source={require('./assets/image/Icone-juridico.png')}
            />
        <Text style={styles.jurid}>Jurídico</Text>
      </Pressable>
    </View>
    
  );
}
  