import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

import Velocimetro from './velocimetro';
import Modal from './modal';

import data from '../../assets/data_Texts.json';

export default function App() {
    const [lang, setLang] = useState(0);
    function toTranslate() {
        lang == 1? setLang(0): setLang(1);
    }
    const [visible, setVisible] = useState(true);
    const toCloseModal = () => {
        visible == true? setVisible(false) : setVisible(true)
    }
    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#000007','transparent']} style={{flex:1}}>                
                <View style={{flex:3}}>
                    <View>
                        <Text style={[styles.titulo,
                                {fontStyle: 'italic',
                                    textTransform: 'uppercase',
                                    textDecorationLine: 'underline',
                                    textDecorationStyle:'double'}]}>
                            {data.titles[lang]}
                        </Text>
                        <Velocimetro/>
                        <Text style={[styles.texts, {fontStyle: 'italic'}]}>
                            {data.metrics[lang]}
                        </Text>
                    </View>
                </View>
                <View style={[styles.icons, {flex: 2, marginTop: 125}]}>
                    <MaterialCommunityIcons name="gas-station" size={75} color="#b8860b"/> 
                    <MaterialCommunityIcons name="oil" size={75} color="#ff1500" />
                    <MaterialCommunityIcons name="progress-alert" size={75} color="#15ff00" />
                </View>
                <View style={styles.buttons}>
                    <Pressable
                    onPress={toCloseModal}
                    style={styles.button}>
                        <MaterialCommunityIcons name="speedometer" size={25} color="#cfcfcf"/>
                        <MaterialCommunityIcons name="plus-thick" size={15} color="#cfcfcf"/>
                    </Pressable>

                    <Pressable
                    onPress={toCloseModal}
                    style={styles.button}>
                        <MaterialCommunityIcons name="tools" size={25} color="#cfcfcf"/>
                        <MaterialCommunityIcons name="plus-thick" size={15} color="#cfcfcf"/>
                    </Pressable>
                </View>
                <View style={styles.lastsServices}>
                    <Text style={styles.texts}>
                        Alertas: ultimos servicos
                    </Text>
                </View>
                <Modal
                    descricao={data.buttons[lang][lang]}
                    type={data.services[lang][lang]}
                    isVisible={visible}
                    onClose={toCloseModal}>
                </Modal>
                <Pressable
                    onPress={toTranslate}>
                <MaterialCommunityIcons
                    name="translate"
                    size={25}
                    color="#cfcfcf"
                    style={{marginBottom: 10, marginLeft: 10}}/>
                </Pressable>
            </LinearGradient>
        </SafeAreaView>
    )
}

function alerta(){alert("foi clickado!")};

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#000',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#cfcfcf',
        paddingHorizontal: 20,
        elevation: 3,
    },
    buttonText:{
        color: '#cfcfcf',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        backgroundColor: '#212121',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 50
    },
    lastsServices:{
        flex:3,
        marginTop: 30,
        margin: 20,
        borderColor: '#cfcfcf',
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: 'black',
        elevation: 5,
    },
    texts:{
        color: '#f5f5f5',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    titulo:{
        textAlign:'center',
        marginTop: 50,
        paddingTop: 30,
        fontSize: 20,
        color: '#cfcfcf',
        fontWeight: 'bold'
    }
})

                    // gauge
                    // plus-thick
                    // speedometer
                    // tools
                    // wrench