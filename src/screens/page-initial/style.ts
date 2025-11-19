import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imgContainer: {
        alignItems: 'center'
    },
    imgInitial:{
        width:368,
        height: 368,
    },
    pagConatiner:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical:20,

    },
    bolInactive:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:'#D3D3D3',
        marginHorizontal:5,
    },
    bolActive:{
        width:10,
        height:10,
        borderRadius:6,
        backgroundColor:'#000000',
        marginHorizontal:5,
    } 
});