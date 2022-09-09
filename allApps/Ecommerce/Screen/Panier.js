import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'


const PanierItem = ({item}) => {

  const dispatch = useDispatch() ;

  const removeOne = () => {


  }

  return (

    <View style = {styles.contentPanier}>

      <Text style = {styles.nom}>
        {item.nom}
      </Text>

      <Text style = {styles.prix}>
        {item.prix}€
      </Text>

      <Button
        onPress={removeOne}
        title='Supp.'
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

const styles = StyleSheet.create({

  contentPanier: {
    width:'100%',
    height:100,
    backgroundColor:'red',
    padding:5,
    margin:5,
    borderRadius:10,
    alignSelf:'center'
    
  },

  nom: {
    color:'white',
    fontSize:25
  },

  prix: {
    color:"black"
  },


})