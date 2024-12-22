import {
    View,
    Text
} from "react-native";

import styles from '../css/odometer_css';

export interface Aspect{
    wBorder: boolean,
    kmOdometer: number[],
}
export default function Hodometro(props: Aspect)
{
    return(
        <View style={props.wBorder? styles.borda : null}>
            <View style={styles.odometro}>
                <Text style={[styles.kms, styles.texts]}>
                    {props.kmOdometer[0]}
                </Text>
                <Text style={[styles.kms, styles.texts]}>
                    {props.kmOdometer[1]}
                </Text>
                <Text style={[styles.kms, styles.texts]}>
                    {props.kmOdometer[2]}
                </Text>
                <Text style={[styles.kms, styles.texts]}>
                    {props.kmOdometer[3]}
                </Text>
                <Text style={[styles.kms, styles.texts]}>
                    {props.kmOdometer[4]}
                </Text>
                <Text style={[{backgroundColor: 'white'}, styles.texts]}>
                    {props.kmOdometer[5]}
                </Text>
            </View>
        </View>
    )
}