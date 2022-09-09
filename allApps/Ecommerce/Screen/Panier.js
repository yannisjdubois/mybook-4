import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const PanierItem = ({item}) => {

  return (

    <View style = {styles.contentPanier}>

      <Text style = {styles.nom}>
        {item.nom}
      </Text>

      <Text style = {styles.prix}>
        {item.prix}€
      </Text>

    </View>

  )
}

const Panier = () => {

  const {dataPanier} = useSelector (state => state);
  console.log('dataPanier:', dataPanier)

  return (
    <View>
      <FlatList
      data = {dataPanier}
      renderItem = {({item}) => <PanierItem item = {item}/>}
      keyExtractor = {item => item.id}/>
    </View>
  )
}

export default Panier

const styles = StyleSheet.create({

  contentPanier: {
    width:'100%',
    height:70,
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