import MaterialCommunityIcons
    from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
    Modal,
    Pressable,
    View,
    Text,
    TextInput,
} from "react-native";
import Hodometro from "./odometer";

import styles from '../css/modal_css';
import Form from "./form";

export default function CustomModal(props: any){
    const [odometro,setOdometro] = useState([])
    const [text, setText] = useState('');

    const updateKm = (result) => {
        setText(result)
        props.handleOdometer(result)
    }
    return(
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.isVisible}
            style={styles.modal}>
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
                        {console.log({text})}
                            <TextInput
                                onChangeText={newText => setText(newText)}
                                keyboardType="numeric"
                                style={{fontSize: 30}}
                                maxLength={6}
                            />
                            <Text>km</Text>
                        </>
                        <Form handleResult={updateKm} handleText={text}/>
                    </View>
                </View>
        </Modal>
    )
}

const eAe = () => alert('Deseja cancelar?')
