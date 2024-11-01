import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create(
{
    button:{
        borderRadius: 30,
        backgroundColor: 'blue',
        padding: 5,
        height: 50,
        width: 90,
        elevation: 5
    },
    buttonsArea:{
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    container:{
        alignItems: 'center',
        bottom: 0,
        backgroundColor: '#cfcfcf',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%',
        height: '65%',
        position: 'absolute',
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal:{
        elevation: 5,
        backgroundColor: 'blue',
        // paddingHorizontal: 75,
        // margin: 20,
        // alignContent: 'center',
        // justifyContent: 'center',
        borderColor: '#cfcfcf',
    },
    input:{
        color: 'blue',
        fontSize: 30,
        elevation: 2,
        textAlign: 'right',
        width: 250,
        height: 70,
        borderRadius: 2.5,
    },
    title:{
        backgroundColor: '#2f2f2f',
        height: '12.5%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleBtn:{
        color: '#cfcfcf',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 7,
    }
}
)