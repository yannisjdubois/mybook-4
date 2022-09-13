import {Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addPanier } from '../../../redux/action'
import { styles } from '../../../theme/ecommerce/styles'
import { Image } from '@rneui/themed';

const ArticleDetails = ({article}) => {

    const dispatch = useDispatch();

    const ajouter = () => {

        dispatch (addPanier(article))
    console.log("ajouter")

    }
  return (

    <View style = {styles.articleDetails}>
        <Image
    style={styles.imageDetails}
    source={{uri: article.image}} 
    PlaceholderContent={<ActivityIndicator />}
  />
        <Text style = {styles.nom}> {article.nom} </Text>
        <Text style={styles.prixDetails}>{article.prix}€            Qte: {article.quantite}</Text>
      <View style = {styles.articleDetails}>
          <TouchableOpacity style = {styles.panier} onPress = {ajouter}>
            <Text style = {styles.textpanier}>Ajouter à votre panier</Text>
          </TouchableOpacity>
      </View>
  </View>

  )
}

export default ArticleDetails