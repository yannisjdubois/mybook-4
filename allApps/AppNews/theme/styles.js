import { StyleSheet } from "react-native"
import { colors } from "./colors"
export const styles = StyleSheet.create({

    content: {backgroundColor: colors.primary,
        padding:15,
        margin : 5,
        borderRadius:5,
        flexDirection:"row"
    },

    viewImg: {
        width: 100,
        height: 10,
    },

    viewTxt: {
        width:220,
        height:140,
    },

    Image : {
        width:100,
        height : 100,
        borderRadius:10,
    },

    TxtTitre : {
        color:"white",
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        
    },

    //page détails

    viewcards: {
        flex:1,
    },

    cards: {
        height:450,
        width:340,
        backgroundColor:"#26a69a",
        margin:10,
        marginRight:10,
        borderRadius:5,
    },

    titreCard: {
        fontSize:20,
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        paddingHorizontal:10,
    },

    viewTxtCard: {
        width: 100,
        height: 190,
    },

    ImageCard : {
        width:340,
        height : 180,
        borderRadius:5
    },
    
    descriptionCard: {
        color:"white",
        padding:10,
        textAlign:"center",
        fontSize:15
    },

    //header

    headerNews: {
        height:50,
        width:"100%",
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
    },

    news: {
        color: '#26a69a',
        fontSize:25
    },

    icon: {
        margin:10,
       

    }
})