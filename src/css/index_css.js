import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    button:{
        backgroundColor: '#000',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#cfcfcf',
        paddingHorizontal: 20,
        elevation: 3,
    },
    buttonText:{
        color: '#cfcfcf',
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
        borderColor: '#cfcfcf',
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
        marginTop: 50,
        paddingTop: 30,
        fontSize: 20,
        color: '#cfcfcf',
        fontWeight: 'bold'
    }
})

// gauge
// plus-thick
// speedometer
// tools
// wrench