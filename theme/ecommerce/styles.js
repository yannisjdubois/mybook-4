import { StyleSheet } from 'react-native'
import { colors } from './colors'



export const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor: colors.secondary,
    },


    /* Styles Header */

    headerAccueil: {
        height:50,
        width:"100%",
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        padding:10,
    },

    nomHeader: {
    fontSize:18,
    color:'black',
    alignSelf:'center'
    },

    headerZoneDroite: {
    flexDirection:'row',
    },

    iconePanier: {
    paddingRight:5
    },



    /* Styles Categories */

    CategoryContent: {
        width: '100%',
      },
    
      CategoryTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
      },
    
      touchCategorie: {
        backgroundColor: colors.primary,
        marginLeft: 10,
        paddingVertical: 10,
        borderRadius: 30,
        height: 45,
        width: 150,
      },
    
      textCategorie: {
        fontSize: 17,
        color: 'black',
        fontWeight: '500',
        textAlign: 'center',
        textTransform: 'capitalize',
      },
    
      
    
      /* Styles Articles */

      ArticleContent: {
        flex:1,
        margin:10
        },
      
        title: {
          fontSize: 25,
          fontWeight: 'bold',
          color:'black',
        },
      
        touchArticle: {
          backgroundColor: colors.primary,
          margin:5,
          padding:10,
          borderRadius:8,
          height:250,
          width:160,
        },
      
        textArticle: {
          fontSize:18,
          color:"black",
          fontWeight:'500',
          marginBottom:5,
          textAlign:"center",
          textTransform: 'capitalize',
        },
      
        header: {
          backgroundColor: colors.primary,
        },
      
        image: {
          borderRadius:5,
          height: 170,
           width: 140,
           marginBottom:5
        },
        prix: {
          fontSize:18,
          color:"black",
          fontWeight:'500',
        },



        /* Styles Détails Articles */

        panier: {
            backgroundColor:colors.primary,
            borderRadius:10,
            padding:5,
            marginTop:10,
            width:200,
            height:40,
            alignSelf:'flex-end'
      
        },
      
        textpanier: {
        color:'black',
        fontSize:18,
        textAlign:'center'
        },
})






