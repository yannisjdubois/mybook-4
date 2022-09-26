import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'
import { styles } from '../../../theme/ecommerce/styles'


const PanierItem = ({item}) => {

  const dispatch = useDispatch() ;

  const removeOne = () => {


  }

  return (

    <View style = {styles.contentPanier}>

      <Text style = {styles.nomPanier}>
        {item.nom}
      </Text>

      <Text style = {styles.prixPanier}>
        {item.prix}€
      </Text>

      <Button
        onPress={removeOne}
        title='Supprimer'
      />

    </View>



  )
}

const Panier = () => {

  const {dataPanier} = useSelector (state => state);
  console.log('dataPanier:', dataPanier)
  const dispatch = useDispatch() ;

  const remove = () => {

    dispatch(removePanier()) ; // je vide mon panier

    console.log("remove")
  }

  return (
    <View>
      <FlatList
      data = {dataPanier}
      renderItem = {({item}) => <PanierItem item = {item}/>}
      keyExtractor = {item => item.id}/>

    <Button
      onPress={remove}
      title="Vider le panier"
    />

    </View>
  )
}

export default Panier