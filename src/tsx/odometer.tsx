import { StyleSheet, View , Text } from "react-native";

export default function Hodometro()
{
    return(
        <View style={styles.borda}>
            <View style={styles.odometro}>
                <Text style={[styles.kms, styles.texts]}>8</Text>
                <Text style={[styles.kms, styles.texts]}>8</Text>
                <Text style={[styles.kms, styles.texts]}>8</Text>
                <Text style={[styles.kms, styles.texts]}>8</Text>
                <Text style={[styles.kms, styles.texts]}>8</Text>
                <Text style={[{backgroundColor: 'white'}, styles.texts]}>8</Text>
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