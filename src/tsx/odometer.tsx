import { StyleSheet, View , Text } from "react-native";

export interface Aspect{
    wBorder: boolean,
    kmOdometer: number[],
}
export default function Hodometro(props: Aspect)
{
    return(
        <View style={props.wBorder? styles.borda : null}>
            <View style={styles.odometro}>
                <Text style={[styles.kms, styles.texts]}>{props.kmOdometer[0]}</Text>
                <Text style={[styles.kms, styles.texts]}>{props.kmOdometer[1]}</Text>
                <Text style={[styles.kms, styles.texts]}>{props.kmOdometer[2]}</Text>
                <Text style={[styles.kms, styles.texts]}>{props.kmOdometer[3]}</Text>
                <Text style={[styles.kms, styles.texts]}>{props.kmOdometer[4]}</Text>
                <Text style={[{backgroundColor: 'white'}, styles.texts]}>{props.kmOdometer[5]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        borda:{
            borderTopLeftRadius: 175,
            borderTopRightRadius: 175,
            borderColor: 'white',
            borderWidth: 7,
            borderBottomWidth: 0,
            marginTop: 50,
            marginHorizontal: 20,
            elevation: 3,
        },
        odometro:{
            flexDirection: 'row',
            marginTop: 50,
            paddingTop: 10,
            paddingBottom: 20,
            justifyContent: 'center',
            elevation: 5,
        },
        kms:{
            backgroundColor: '#000',
            color: '#fff',
        },
        texts:{
            borderWidth: 1,
            borderColor: '#cfcfcf',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            padding: 10
        }
    }
)