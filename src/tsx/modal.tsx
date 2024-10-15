import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export interface Titles{
    descricao: string,
    type: string,
}

export default function Modal(props: Titles){
    return(
        <View
        style={styles.container}>
            <Text>
                {props.type}
            </Text>
            <View
        style={styles.modal}>
                <Text>
                </Text>
                <TextInput
                    style={styles.input}
                    // value={number}
                    placeholder="95 km"
                    keyboardType="numeric"
                />
                <Text>{props.descricao}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        position: 'absolute',
    },
    modal:{
        elevation: 5,
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
    }
}

)