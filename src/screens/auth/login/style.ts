import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 28,
        justifyContent: 'space-between',
    },

    headerContainer: {
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
        paddingVertical: 18,
        paddingHorizontal: 8,
        fontSize: 42,
    },

    img: {
        width: 60,
        height: 60,
    },
    formUser: {
        paddingVertical: 20,
        gap: 18,
        flexDirection: 'column'
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
    },
    footerContainer: {
        gap: 28,
        alignItems: "center",
        width: "100%"
    },

    forgotPassword: {
        textAlign: 'right',
        marginTop: 20,
        fontSize: 14,
        paddingRight: 4,
        color: colors.gray100
    },

    footerText: {
        flexDirection: "row",
        gap: 4,
    },
    linkFooterText: {
        color: colors.secondary
    }

});