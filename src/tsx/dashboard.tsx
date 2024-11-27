import { Children, useState } from "react";
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// export default function Dashboard (Children: any)
export default function Dashboard (Children: any)
{
    const [actived, setActived] = useState('default')
    const size = 50;
    const colors = {
        default: '#fcfcfc',
        gas: '#b8860b',
        oil: '#ff1500',
        progress: '#15ff00',
        tire: '#00005f',
        alert: '#ff0015'
    }
    return(
        <>
 {/* odometer   {Children} */}
            <View style={[styles.icons, {flex: 2, marginTop: 175}]}>
                <MaterialCommunityIcons name="gas-station" size={size} color={colors.default} style={{paddingTop: 30}}/> 
                <MaterialCommunityIcons name="oil" size={size} color={colors.default}/>
            <View
            style={{
                // borderColor: '#fff',
                // borderWidth: 1,
                marginHorizontal: 10,
                position: 'absolute',
                alignItems: 'center',
                width: 320,
                opacity: .07,
                marginLeft: 0,
                marginTop: 65}}>
                <MaterialCommunityIcons 
                    name="alert"
                    // "alert-circle-outline"
                    size={size - 5}
                    color={colors.default}
                    style={{
                        zIndex: 2
                        }}/>
            </View>
                <MaterialCommunityIcons name="progress-alert" size={size} color={colors.default} />
                <MaterialCommunityIcons name="car-tire-alert" size={size} color={colors.default}  style={{paddingTop: 30}}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create(
    {
        icons:{
            marginHorizontal: 10,
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 15,
            paddingBottom: 10,
            elevation: 5,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
            opacity: .9
        },
    }
)