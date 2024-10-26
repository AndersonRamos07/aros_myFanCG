import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Modal, StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export interface Titles{
    descricao: string,
    type: string,
    isVisible: boolean,
    hodometro: number,
    onClose: () => void,
}

export default function CustomModal(props: Titles){
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
                        <TextInput
                            style={styles.input}
                            // placeholder={props.velocimetro}
                            keyboardType="numeric">
                        </TextInput>
                        <Text>km</Text>
                        <View
                            style={styles.buttonsArea}>
                            <Pressable
                            style={styles.button}>
                                <Text
                                style={styles.titleBtn}>
                                    Adicionar
                                </Text>
                            </Pressable>
                            <Pressable
                            style={styles.button}>
                                <Text
                                style={styles.titleBtn}>
                                    Cancelar
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 15,
        backgroundColor: 'blue',
        padding: 5,
        elevation: 5
    },
    buttonsArea:{
        width: '100%',
        paddingHorizontal: 20,
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
        height: '75%',
        position: 'absolute',
    },
    content:{
        justifyContent: 'center'
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
        // borderColor: 'black',
        // borderBottomColor: 'gray',
        elevation: 3,
        textAlign: 'right',
        width: '80%',
        height: 70,
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
        color: '#cfcfcf'
    }
})