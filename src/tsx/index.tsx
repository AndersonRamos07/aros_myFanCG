import { createContext, useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from '../css/index_css';
import data from '../../assets/data_Texts.json';

import Dashboard from './dashboard';
import Hodometro from './odometer';
import Modal from './modal';


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
                            <Text style={[styles.texts, {fontStyle: 'italic', marginBottom: 10}]}>
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