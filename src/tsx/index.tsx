import { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MCIcon
    from '@expo/vector-icons/MaterialCommunityIcons';

import styles,
    { colorMain } from '../css/index_css';
import data from '../../assets/data_Texts.json';
import km from '../../assets/data_km.json';

//region:c1 -   componentes externos
import Board from './board';
import CustomButton from './customButton';
import Dashboard from './dashboard';
import Hodometro from './odometer';
import Modal from './modal';
//endregion:c1

export default function App() {
    // const [ odometer , setOdometer ] = useState(km.hodometro);
    // console.log(km.hodometro)
    const [lang, setLang] = useState(0);
    const toTranslate = () => {
        lang == 1? setLang(0): setLang(1);
    }
    const [visible, setVisible] = useState(true);
    const toCloseModal = (res) => {
        visible == true? setVisible(false) : setVisible(true)
        console.log('res: ' + res)
        setOdometerKM(res)
    }
    const [actived, setActived] = useState(false);
    const toActive = () => {
        actived == false? setActived(true) : setActived(false)
    }
    const [odometerKm, setOdometerKM] = useState(km.hodometro);
    const updateOdometer = r => toCloseModal(r)

    return(
        <SafeAreaView
            style={styles.container}>
            <LinearGradient
                colors={['#000007','transparent']}
                style={{flex:1}}>
                    <View style={{flex:2}}>
                        <View>
                            <Text style={ [ styles.titulo, styles.mainTitle ]}>
                                {data.titles[lang]}
                            </Text>
                                <Hodometro
                                kmOdometer={odometerKm}
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
                            style={[styles.texts , styles.alertTitle]}>
                        <MCIcon
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
                        hodometro={odometerKm}>
                    </Modal>
            </LinearGradient>
        </SafeAreaView>
    )
}