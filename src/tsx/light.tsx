import { Pressable } from "react-native";
import MCIcon
    from "@expo/vector-icons/MaterialCommunityIcons";

export interface Details{
    color: string,
    name: string,
    size: number,
    type: string,
    onClick: () =>{},
}

export default function Light(props:Details){
    return(
        <Pressable
        onPress={props.onClick}
            style={props.type == 'below'?{paddingTop: 30}:{paddingTop: 5}}
        >
            <MCIcon
                color={props.color}
                name={props.name}
                size={props.size}
            /> 
        </Pressable>
    )
}
