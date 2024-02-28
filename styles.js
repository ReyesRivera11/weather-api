import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        // paddingHorizontal:200
        width:"100%"
    },
    head:{
        marginTop:50,
        width:"100%",
        paddingHorizontal:20
    },
    temp:{
        color:"white",
        fontSize:90
    },
    location:{
        color:"white",
        fontWeight:"bold",
        fontSize:16
    },
    textMinMax:{
        flexDirection:"row",
        gap:10,
    },
    textWhite:{
        color:"white",
    },
    lastThreeDays:{
        backgroundColor: 'rgba(196, 185, 191, 0.2)',
        padding:20,
        borderRadius:50,
        marginBottom:40
    },
    contentDay:{
        flexDirection:"row",
        padding:20,
        justifyContent:"space-between",
        alignItems:"center",
        gap:5
    },
    textCondition:{
        color:"white",
        width:"25%"
    },
    containerLastHpurs:{
        backgroundColor:'rgba(196, 185, 191, 0.2)',
        padding:10,
        borderRadius:10,
        marginVertical:50,
        justifyContent:"center",
        alignItems:"center",
    },
    hourlyContainer:{
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"stretch"
    },
    hourIcon:{
        width:50,
        height:50,
    },
    containerButtom:{
        flexDirection:"row",
        backgroundColor:'rgba(196, 185, 191, 0.5)',
        padding:10,
        borderRadius:10,
        marginVertical:10,
        gap:10,
        justifyContent:"center",
    }


});