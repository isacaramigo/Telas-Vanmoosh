import { View, Text, Image, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './style/configuraçao.js';

export default function App() {
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.cabeçalho}>
                <Pressable>
                    <Image
                        style={styles.voltar}
                        source={require('./assets/image/Icone-voltar.png')}
                    />
                </Pressable>

                <Image
                    style={styles.perfil}
                    source={require('./assets/image/Icone-FotoPerfil.png')}
                />

            </View>

            <View style={styles.body}>

                {/*IMPUT NOME*/}
                <Text style={styles.tipo}>Nome:</Text>
                <TextInput style= {styles.imputNome} 
                    placeholder='Juliana de Azevedo'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar1}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                {/*IMPUT Nascimento*/}
                <Text style={styles.tipo}>Data de Nascimento:</Text>
                <View style={styles.dN}>
                    <Text style={styles.niver}>21/10/89</Text>
                </View>

                {/*IMPUT CPF*/}
                <Text style={styles.tipo}>CPF:</Text>
                <TextInput style= {styles.imputCpf} 
                    placeholder='111.222.333.44'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar2}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                {/*IMPUT RG*/}
                <Text style={styles.tipo}>RG:</Text>
                <TextInput style= {styles.imputRg} 
                    placeholder='12 345 678-9'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar3}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                {/*IMPUT CEP*/}
                <Text style={styles.tipo}>CEP: </Text>
                <TextInput style= {styles.imputCep} 
                    placeholder=' 00000-000'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar4}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                {/*IMPUT COMPLEMENTO*/}
                <Text style={styles.tipo}>Complemento:</Text>
                <TextInput style= {styles.imputCompl} 
                    placeholder='C- 55'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar5}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                {/*IMPUT NÚMERO*/}
                <Text style={styles.tipo}>Número:</Text>
                <TextInput style= {styles.imputNmr} 
                    placeholder='150'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar6}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>
            </View>

            <Pressable>
                <View style={styles.botao}>
                    <Text style={styles.salvar}>Salvar</Text>
                </View>
            </Pressable>

        </View>
    );
}