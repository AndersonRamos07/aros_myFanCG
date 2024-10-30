import { createContext, useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Dashboard from './dashboard';
import Hodometro from './odometer';
import Modal from './modal';

import data from '../../assets/data_Texts.json';

const OdometerContext = createContext([0,0,0,0,0,0]);

export default function App() {
    const [lang, setLang] = useState(0);
    function toTranslate() {
        lang == 1? setLang(0): setLang(1);
    }
    const [visible, setVisible] = useState(true);
    const toCloseModal = () => {
        visible == true? setVisible(false) : setVisible(true)
    }
    const [odometerKm, setOdometerKM] = useState([0,0,0,0,0,0]);
    
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
                        <OdometerContext.Provider value={odometerKm}>
                            <Hodometro
                            kmOdometer={odometerKm}
                            wBorder={true}/>
                            <Text style={[styles.texts, {fontStyle: 'italic'}]}>
                                {data.metrics[lang]}
                            </Text>
                        </OdometerContext.Provider>
                    </View>
                </View>
                <Dashboard/>
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
                    onClose={toCloseModal}
                    kmOdometer={(odometerKM) => setOdometerKM(odometerKM)}
                    hodometro={odometerKm}>
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