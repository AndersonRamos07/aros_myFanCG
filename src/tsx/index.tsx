import { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons
    from '@expo/vector-icons/MaterialCommunityIcons';

import styles,
    { colorMain } from '../css/index_css';
import data from '../../assets/data_Texts.json';

//region:c1 -   componentes externos
import Dashboard from './dashboard';
import Modal from './modal';
import Hodometro from './odometer';
import CustomButton from './customButton';
import Board from './board';
//endregion:c1

export default function App() {
    const [ odometer , setOdometer ] = useState();
    const [lang, setLang] = useState(0);
    function toTranslate() {
        lang == 1? setLang(0): setLang(1);
    }
    const [visible, setVisible] = useState(true);
    const toCloseModal = (res) => {
        visible == true? setVisible(false) : setVisible(true)
        setOdometer(res)
    }
    const updateOdometer = r => toCloseModal(r)
 
    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#000007','transparent']}
                style={{flex:1}}>
                    <View style={{flex:3}}>
                        <View>
                            <Text style={
                                [
                                    styles.titulo,
                                    styles.mainTitle
                                ]}>
                                {data.titles[lang]}
                            </Text>
                                <Hodometro
                                kmOdometer={odometer}
                                wBorder={true}/>
                                <Text style={
                                        [
                                            styles.texts,
                                            {
                                                fontStyle: 'italic',
                                                marginBottom: 10
                                            }
                                        ]}>
                                    {data.metrics[lang]}
                                </Text>
                        </View>
                    </View>
                    <Dashboard/>
                    <View style={styles.buttons}>
                        <CustomButton
                            onClose={toCloseModal}
                            mainIcon='speedometer'
                            icon='plus-thick'
                            mainSize={25}
                            size={15}
                        />
                        <CustomButton
                            onClose={toCloseModal}
                            mainIcon='tools'
                            icon='plus-thick'
                            mainSize={25}
                            size={15}
                        />
                    </View>
                    <View
                        style={styles.lastsServices}>
                        <Text
                            style={styles.texts}>
                        <MaterialCommunityIcons
                            name="alert"
                            size={15}
                            color={colorMain}
                        />
                            Alertas: ultimos servicos
                        </Text>
                        <Board
                        km={250}
                        newKm={300}
                        color='#fcfcfc'
                        />
                    </View>
                    <Modal
                        handleOdometer={updateOdometer}
                        descricao={data.buttons[lang][lang]}
                        type={data.services[lang][lang]}
                        isVisible={visible}
                        onClose={toCloseModal}
                        hodometro={odometer}>
                    </Modal>
            </LinearGradient>
        </SafeAreaView>
    )
}

function alerta(){alert("foi clickado!")};