import { StyleSheet } from 'react-native';

export const colorMain = '#cfcfcf';

export default styles = StyleSheet.create({
    button:{
        backgroundColor: '#000',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colorMain,
        paddingHorizontal: 20,
        elevation: 3,
    },
    buttonText:{
        color: colorMain,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        backgroundColor: '#212121',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    lastsServices:{
        flex:3,
        marginTop: 30,
        margin: 20,
        borderColor: colorMain,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: 'black',
        elevation: 5,
    },
    texts:{
        color: '#f5f5f5',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    titulo:{
        textAlign:'center',
        marginTop: 30,
        paddingTop: 10,
        fontSize: 20,
        color: colorMain,
        fontWeight: 'bold'
    },
    mainTitle:{
        fontStyle: 'italic',
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        textDecorationStyle:'double'
    },
})

// gauge
// plus-thick
// speedometer
// tools
// wrench