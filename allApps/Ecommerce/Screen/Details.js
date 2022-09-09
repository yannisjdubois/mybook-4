import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import {FirebaseContext} from '../../../firebaseContext';

const Details = ({route}) => {

  const {id} = route.params;
  const [article, setArticle] = useState(null);
  const firebase = useContext(FirebaseContext);
  const [load, setLoad] = useState (false);

  const NoArticle = () => {

    return (<Text> Pas d'article</Text>)
  }

  const getArticle = async () => {

    //Chargement avant requete
    setLoad(true);

    //Appel de la requete
    const rqArticle = await firebase.getArticleById(id);

    setTimeout(() => {

      setArticle ({id:id, ...rqArticle.data()});
      setLoad(false)

    }, 3000);

    console.log(rqArticle.data());

  }

  useEffect (() => {

    getArticle();
  }, [])

  console.log('id', id)
  console.log("rqArticle")
  
  return (
    <View style = {styles.vueContent}>

      {
      // (load == true)? <ActivityIndicator/>: 
            (article == null)? <NoArticle/>
              :<View style = {styles.content}>
                <Image style={styles.image} source={{uri: article.image}} />
                <Text style = {styles.nom}> {article.nom} </Text>
                <Text style = {styles.prix}> {article.prix}€ </Text>
                <Text style = {styles.description}>{article.description}</Text>

                <View>
                  <TouchableOpacity style = {styles.panier}>
                    <Text style = {styles.textpanier}>Ajouter à votre panier</Text> 
                  </TouchableOpacity>
              </View></View>
      }

    </View>
    
  )

}

export default Details

const styles = StyleSheet.create({

  nom: {
    color:"black",
    fontSize:20,
    fontWeight:'bold',
    // textAlign:'center'
    },

    prix: {
      color:"black",
      fontSize:20,
    
    },

    description: {
      color:"black",
      paddingTop:5,
      fontSize:16
    },

    image: {
      borderRadius:5,
      height: "100%",
       width: "100%",
       marginBottom:5,
       width:"100%",
    },

    vueContent: {
      backgroundColor:'white',
      flex:1
    },

    content: {
      margin:15,
      height:300,
      borderRadius:5,
    },

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
    }

})