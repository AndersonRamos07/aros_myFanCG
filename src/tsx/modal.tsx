import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react";
import { Modal, View, Text, TextInput, Pressable, TouchableHighlight } from "react-native";
import Hodometro from "./odometer";

import styles from '../css/modal_css';

export interface Titles{
    descricao: string,
    type: string,
    isVisible: boolean,
    hodometro: number,
    onSetOdo: () => {},
    onClose: () => void,
}

export default function CustomModal(props: Titles){
    const [odometro,setOdometro] = useState([])
    const [text, setText] = useState('');
    return(
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.isVisible}
            style={styles.modal}
            >
                <View
                    style={styles.container}>
                    <View
                        style={styles.title}>
                        <Text
                        style={{color:'#cfcfcf',
                            fontSize: 20}}>
                            {props.descricao}
                        </Text>
                        <Pressable
                            onPress={props.onClose}>
                            <MaterialCommunityIcons
                                name="close"
                                color="#cfcfcf"
                                size={20} />
                        </Pressable>
                    </View>
                    <View
                    style={styles.content}>
                        <Hodometro
                        kmOdometer={text}
                        wBorder={false}/>
                        <>
                            <TextInput
                                onChangeText={newText => setText(newText)}
                                defaultValue={text}
                                keyboardType="numeric"
                                style={{fontSize: 30}}
                            >
                            {text
                                .split('')
                                .map(word => odometro)}
                            </TextInput>
                            <Text>km</Text>
                        </>
                        <View
                            style={styles.buttonsArea}>
                            <TouchableHighlight
                            style={styles.button}
                            onPress={props.onSetOdo}>
                                <Text
                                style={styles.titleBtn}>
                                    Atualizar
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                            style={styles.button}
                            onPress={eAe}>
                                <Text
                                style={styles.titleBtn}>
                                    Cancelar
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
        </Modal>
    )
}

const eAe = () => alert('Deseja cancelar?')