import { Children, ComponentElement, useState } from "react";
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons
    from '@expo/vector-icons/MaterialCommunityIcons';
import Light from "./light";

export default function Dashboard (Children: any)
{
    const colorDefault = '#fcfcfc'
    const [gasLight, setGasLight] = useState(colorDefault)
        const lightGas = () => gasLight != colorDefault?
            setGasLight(colorDefault):
            setGasLight('#b8860b')
    const [oilLight, setOilLight] = useState(colorDefault)
        const lightOil = () => oilLight != colorDefault?
            setOilLight(colorDefault):
            setOilLight('#ff1500')
    const [progressLight, setProgressLight] = useState(colorDefault)
        const lightProgress = () => progressLight != colorDefault?
            setProgressLight(colorDefault):
            setProgressLight('#15ff00')
    const [carTireLight, setCarTireLight] = useState(colorDefault)
        const lightCarTire = () => carTireLight != colorDefault?
            setCarTireLight(colorDefault):
            setCarTireLight('#00005f')
    const [alertLight, setAlertLight] = useState(colorDefault)
        const lightAlert = () => alertLight != colorDefault?
            setAlertLight(colorDefault):
            setAlertLight('#ff0015')
    const size = 50;

    return(
        <>
            <View
                style={
                    [
                        styles.icons,
                        {            
                            flex: 2,
                            marginTop: 175
                        }
                    ]
                }>
                    <Light
                        color={gasLight}
                        name='gas-station'
                        size={size}
                        onClick={lightGas}
                        type='below'
                    />
                    <Light
                        color={oilLight}
                        name='oil'
                        size={size}
                        onClick={lightOil}
                        type='over'
                    />
            <View
                style={styles.above}>
                <MaterialCommunityIcons
                    name="alert"
                    // "alert-circle-outline"
                    size={size - 5}
                    color={alertLight}
                    style={{
                        zIndex: 2
                    }}/>
            </View>
                    <Light
                        color={progressLight}
                        name='progress-alert'
                        size={size}
                        onClick={lightProgress}
                        type='over'
                    />
                    <Light
                        color={carTireLight}
                        name='car-tire-alert'
                        size={size}
                        onClick={lightCarTire}
                        type='below'
                    />
            </View>
        </>
    )
}

const styles = StyleSheet.create(
    {
        above:{
            // borderColor: '#fff',
            // borderWidth: 5,
            marginHorizontal: -45,
            alignItems: 'center',
            width: '100vw',
            opacity: .07,
            marginTop: 75
        },
        icons:{
            marginHorizontal: 10,
            marginBottom: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 15,
            paddingBottom: 20,
            elevation: 5,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
            opacity: .7
        },
    }
)