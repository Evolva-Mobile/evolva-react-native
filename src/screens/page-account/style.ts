    import { colors } from "@/src/styles/theme";
    import { StyleSheet } from 'react-native';

    export const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
        contentWrapper: {
            flex: 1,
            justifyContent: 'space-between',
            paddingTop: '100%',
            paddingHorizontal: 16,
            paddingBottom: 60
        },
        text_title:{
            paddingVertical: 18,
            paddingHorizontal: 8,
            fontSize: 45,
            width: "100%",
            textAlign: 'center',
            color: colors.withe100,   
        },
        text_regular:{
            fontSize: 18,
            textAlign: 'center',
            width: "100%",
            color: colors.withe100,
        },
        dividerContainer:{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
        },
        dividerLine:{
            flex: 1,
            height: 1,
            backgroundColor: colors.withe100,
        },
        dividerText:{
            marginHorizontal: 8,
            fontSize: 14,
            color: colors.withe100,
        },

    });