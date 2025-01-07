import MCIcon
    from "@expo/vector-icons/MaterialCommunityIcons";
import { useState , useRef } from "react";
import {
    Modal,
    Pressable,
    View,
    Text,
    TextInput,
    Button,
} from "react-native";
import Hodometro from "./odometer";

import styles from '../css/modal_css';
import Form from "../.trash/form";

export default function CustomModal(props: any){
    const [text, setText] = useState(props.hodometro);
    const [autoFocus, setAutoFocus] = useState(false);

    const updateKm = (result) => {
        props.handleOdometer(result)
    }

    const refInput = useRef(null);
    const putOnFocus = () => {
        refInput.current.clear();
        refInput.current.focus();
    }
    const cancel = () => props.onClose()

    return(
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.isVisible}
            style={styles.modal}>
                {()=>setText('')}
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
                            <MCIcon
                                name="close"
                                color="#cfcfcf"
                                size={20} />
                        </Pressable>
                    </View>
                    <View
                        style={styles.content}>
                        <Pressable
                            onPress={putOnFocus}>
                            <Hodometro
                                kmOdometer={text}
                                wBorder={false}/>
                        </Pressable>
                        <View
                            style={{display: 'flex', flexDirection: 'column'}}>
                            {console.log({text})}
                            <TextInput
                                ref={refInput}
                                onChangeText={newText => setText(newText)}
                                keyboardType="numeric"
                                style={{marginTop: -75, zIndex: -1}}
                                maxLength={6}
                            />
                        </View>
                        <View
                            style={styles.containerButtons}
                        >
                            <Button
                                title='Cancelar'
                                onPress={()=>{
                                    setText('')
                                    // cancel()
                                }}
                            />
                            <Button
                                title='Adicionar'
                                onPress={()=>{
                                    updateKm(text)
                                }}
                            />
                        </View>
                    </View>
                </View>
        </Modal>
    )
}