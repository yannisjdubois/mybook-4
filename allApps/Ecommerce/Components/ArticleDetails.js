import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addPanier } from '../../../redux/action'

const ArticleDetails = ({article}) => {

    const dispatch = useDispatch();

    const ajouter = () => {

        dispatch (addPanier(article))
    console.log("ajouter")

    }
  return (
    // {/* <View style={styles.headerAccueil}>
    //   <Icon  name="arrow-back" color="black" onPress={() => navigation.navigate('Home')} />
    //   <Text style={styles.nomHeader}>Détails</Text>
    //   <Icon name="search" color="black" onPress={() => navigation.navigate('')}/>  
    //    </View> */}

    // // <View style = {styles.content}>
    // // <Image style={styles.image} source={{uri: article.image}} />
    // // <Text style = {styles.nom}> {article.nom} </Text>
    // // <Text style = {styles.prix}> {article.prix}€ </Text>
    // // <Text style = {styles.description}>{article.description}</Text>

    <View>
     <Text style = {styles.nom}> {article.nom} </Text>
    <View>
      <TouchableOpacity style = {styles.panier} onPress = {ajouter}>
        <Text style = {styles.textpanier}>Ajouter à votre panier</Text> 
      </TouchableOpacity>
  </View>
  </View>

  )
}

export default ArticleDetails

const styles = StyleSheet.create({
    panier: {
        backgroundColor:'#e9b87c',
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
  
      headerAccueil: {
        height:50,
        width:"100%",
        backgroundColor:'#e9b87c',
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
  
})
