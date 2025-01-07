import {
    ScrollView,
    StyleSheet,
    Text,
    View } from 'react-native';
import MaterialCommunityIcons
    from "@expo/vector-icons/MaterialCommunityIcons";

export default function Board(props: any)

{
    const size = 17.5
    return(
        <ScrollView>
            <View>
                <Text
                style={styles.text}>
                    <MaterialCommunityIcons
                    style={styles.icons}
                    color={props.color}
                    name='gas-station'
                    size={size}
                    />
                    {'\t\t'}Este servico foi realizado aos {props.km} km,
                    {'\n\t\t\t\t'}restando {props.newKm}km para o proximo.
                </Text>
                <Text
                style={styles.text}>
                    <MaterialCommunityIcons
                    style={styles.icons}
                    color={props.color}
                    name='oil'
                    size={size}
                    />
                    {'\t\t'}Este servico foi realizado aos {props.km} km,
                    {'\n\t\t\t\t'}restando {props.newKm}km para o proximo.
                </Text>
                <Text
                style={styles.text}>
                    <MaterialCommunityIcons
                    style={styles.icons}
                    color={props.color}
                    name='progress-alert'
                    size={size}
                    />
                    {'\t\t'}Este servico foi realizado aos {props.km} km,
                    {'\n\t\t\t\t'}restando {props.newKm}km para o proximo.
                </Text>
                <Text
                style={styles.text}>
                    <MaterialCommunityIcons
                    style={styles.icons}
                    color={props.color}
                    name='car-tire-alert'
                    size={size}
                    />
                    {'\t\t'}Este servico foi realizado aos {props.km} km,
                    {'\n\t\t\t\t'}restando {props.newKm}km para o proximo.
                </Text>
                <Text
                style={styles.text}>
                    <MaterialCommunityIcons
                    style={styles.icons}
                    color={props.color}
                    name='alert'
                    size={size}
                    />
                    {'\t\t'}Este servico foi realizado aos {props.km} km,
                    {'\n\t\t\t\t'}restando {props.newKm}km para o proximo.
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        text:{
            fontSize: 20,
            color:'#fcfcfc',
            marginLeft: 20,
            paddingHorizontal: 10,
        },
        icons:{
            paddingHorizontal: 5,
        }
    }
)