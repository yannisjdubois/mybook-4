import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import {FirebaseContext} from '../../firebaseContext';

import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

import ArticleDetails from './Components/ArticleDetails';

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

      setArticle (rqArticle.data());
      setLoad(false)

    }, 3000);

    console.log(rqArticle.data());

  }

  useEffect (() => {

    getArticle();
  }, [])

  console.log('id', id)
  console.log("rqArticle")
  
  const navigation = useNavigation();

  return (
   
     <View style = {styles.vueContent}>
       {
        (load == true)? <ActivityIndicator/>: 
            (article == null)? <NoArticle/>
            :<ArticleDetails article={article}/>
             
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

   

})