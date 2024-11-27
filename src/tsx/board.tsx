import {
    StyleSheet,
    Text,
    View } from 'react-native';
import MaterialCommunityIcons
    from "@expo/vector-icons/MaterialCommunityIcons";

export default function Board(props: any)

{
    const size = 20
    return(
        <View>
            <Text
            style={styles.text}>
                <MaterialCommunityIcons
                style={styles.icons}
                color={props.color}
                name='gas-station'
                size={size}
                />
                {'\t\t'}Este servico foi realizado aos {props.km} km, restando
                {'\n\t\t\t\t'}{props.newKm}km para o proximo.
            </Text>
            <Text
            style={styles.text}>
                <MaterialCommunityIcons
                style={styles.icons}
                color={props.color}
                name='oil'
                size={size}
                />
                {'\t\t'}Este servico foi realizado aos {props.km} km, restando
                {'\n\t\t\t\t'}{props.newKm}km para o proximo.
            </Text>
            <Text
            style={styles.text}>
                <MaterialCommunityIcons
                style={styles.icons}
                color={props.color}
                name='progress-alert'
                size={size}
                />
                {'\t\t'}Este servico foi realizado aos {props.km} km, restando
                {'\n\t\t\t\t'}{props.newKm}km para o proximo.
            </Text>
            <Text
            style={styles.text}>
                <MaterialCommunityIcons
                style={styles.icons}
                color={props.color}
                name='car-tire-alert'
                size={size}
                />
                {'\t\t'}Este servico foi realizado aos {props.km} km, restando
                {'\n\t\t\t\t'}{props.newKm}km para o proximo.
            </Text>
            <Text
            style={styles.text}>
                <MaterialCommunityIcons
                style={styles.icons}
                color={props.color}
                name='alert'
                size={size}
                />
                {'\t\t'}Este servico foi realizado aos {props.km} km, restando
                {'\n\t\t\t\t'}{props.newKm}km para o proximo.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        text:{
            fontSize: 10,
            color:'#fcfcfc',
            marginLeft: 15,
            paddingHorizontal: 10,
        },
        icons:{
           marginTop: 20,
        }
    }
)