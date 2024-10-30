import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react";
import { Modal, StyleSheet, View, Text, TextInput, Pressable, TouchableHighlight } from "react-native";
import Hodometro from "./odometer";

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

const styles = StyleSheet.create({
    button:{
        borderRadius: 30,
        backgroundColor: 'blue',
        padding: 5,
        height: 50,
        width: 90,
        elevation: 5
    },
    buttonsArea:{
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    container:{
        alignItems: 'center',
        bottom: 0,
        backgroundColor: '#cfcfcf',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%',
        height: '65%',
        position: 'absolute',
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal:{
        elevation: 5,
        backgroundColor: 'blue',
        // paddingHorizontal: 75,
        // margin: 20,
        // alignContent: 'center',
        // justifyContent: 'center',
        borderColor: '#cfcfcf',
    },
    input:{
        color: 'blue',
        fontSize: 30,
        elevation: 2,
        textAlign: 'right',
        width: 250,
        height: 70,
        borderRadius: 2.5,
    },
    title:{
        backgroundColor: '#2f2f2f',
        height: '12.5%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleBtn:{
        color: '#cfcfcf',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 7,
    }
})