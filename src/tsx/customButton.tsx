import {
    Pressable,
    StyleSheet
} from 'react-native';
import MaterialCommunityIcons
    from '@expo/vector-icons/MaterialCommunityIcons';
import { colorMain } from '../css/index_css';

export interface Params{
    mainIcon: string,
    icon: string,
    mainSize: number,
    size: number,
    onClose: () => void,
}

export default function CustomButton(props:Params)
{
    return(
        <Pressable
            onPress={props.onClose}
            style={styles.button}>
            <MaterialCommunityIcons
                name={props.mainIcon}
                size={props.mainSize}
                color={colorMain}
                />
            <MaterialCommunityIcons
                name={props.icon}
                size={props.size}
                color={colorMain}
        />
        </Pressable>
    )
}

const styles = StyleSheet.create(
    {
        button:{
            backgroundColor: '#000',
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colorMain,
            paddingHorizontal: 20,
            elevation: 3,
        },
    }
)