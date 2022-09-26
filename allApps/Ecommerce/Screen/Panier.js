import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Avatar, BackgroundImage, Button, ListItem } from '@rneui/base'
import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'

import PanierItem from '../Components/PanierItem'
/* import { styles } from '../../../theme/ecommerce/styles' */ 



// const PanierItem = ({item}) => {

//   const dispatch = useDispatch() ;

//   const removeOne = () => {

//     dispatch(removeOnePanier(item))


//   }

//   return (

//     <View style = {styles.contentPanier}>

//       <Text style = {styles.nomPanier}>
//         {item.nom}
//       </Text>

//       <Text style = {styles.prixPanier}>
//         {item.prix}€
//       </Text>

//       <Button
//         onPress={removeOne}
//         title='Supprimer'
//       />

//     </View>



//   )
// }



const Panier = () => {

  const {dataPanier} = useSelector (state => state);
  console.log('dataPanier:', dataPanier)
  const dispatch = useDispatch() ;

  const remove = () => {

    dispatch(removePanier()) ; // je vide mon panier

    console.log("remove")
  }

  return (
    <View style={styles.container}>

      <FlatList
        data = {dataPanier}
        renderItem = {({item}) => <PanierItem item = {item}/>}
        keyExtractor = {item => item.id}/>

      <View style={styles.bottom}>

        <View style={styles.prix}>
          <Text>73e</Text>
        </View>

        <View style={styles.acheter}>
          <Button
          buttonStyle={styles.BoutonAcheter}
          type="solid"
          containerStyle={styles.containerBoutonAcheter}
          >
            Acheter</Button>
        </View>

      </View>
    </View>
  )
}

export default Panier

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#00756c',
    justifyContent: 'space-between',
  },

  bottom : {
    flexDirection:'row',
    height: 75,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  prix : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  acheter : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBoutonAcheter : {
    color: 'white',
  },
})