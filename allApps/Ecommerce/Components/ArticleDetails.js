import {Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addPanier } from '../../../redux/action'
import { styles } from '../../../theme/ecommerce/styles'

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