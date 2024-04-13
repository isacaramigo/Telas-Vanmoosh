import { View, Text, Image, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './style/editarInfoAna.js';

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

                <Text style={styles.titulo}>Ana</Text>
                <View style={styles.linha1}></View>
            </View>

            <View style={styles.body}>
                <Text style={styles.tipo}>Nome:</Text>
                <TextInput style= {styles.imputNome} 
                    placeholder='Ana'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar1}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                <Text style={styles.tipo}>Data de Nascimento:</Text>
                <View style={styles.dN}>
                    <Text style={styles.niver}>10/10/2010</Text>
                </View>

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

                <Text style={styles.tipo}>CEP da Casa:</Text>
                <TextInput style= {styles.imputCep} 
                    placeholder=' 00000-000'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar4}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                <Text style={styles.tipo}>CEP da Escola:</Text>
                <TextInput style= {styles.imputCEP} 
                    placeholder=' 00000-000'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar5}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                <Text style={styles.tipo}>Horário que as aulas começam:</Text>
                <TextInput style= {styles.imputHc} 
                    placeholder='07:15'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar6}
                        source={require('./assets/image/Icone-editar.png')}
                    />
                </Pressable>

                <Text style={styles.tipo}>Horário que as aulas acabam:</Text>
                <TextInput style= {styles.imputHa} 
                    placeholder='07:15'
                /> 
                <Pressable>
                    <Image
                        style={styles.editar7}
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