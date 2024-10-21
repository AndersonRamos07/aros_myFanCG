import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Modal, StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export interface Titles{
    descricao: string,
    type: string,
    isVisible: boolean,
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
                        <Text>
                            Modal
                        </Text>
                    </View>
                </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        bottom: 0,
        backgroundColor: '#cfcfcf',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // justifyContent: 'center',
        width: '100%',
        height: '75%',
        position: 'absolute',
    },
    content:{
        
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
        borderColor: 'black',
        borderBottomColor: 'gray',
        elevation: 3,
    },
    title:{
        backgroundColor: '#005500',
        height: '10%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})