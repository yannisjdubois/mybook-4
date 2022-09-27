import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Avatar, BackgroundImage, Button, ListItem } from '@rneui/base'
import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'

import PanierItem from '../Components/PanierItem'
import { styles } from '../../../theme/ecommerce/styles'



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

  const [ prix, setPrix ] = React.useState() ;

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

      <View style={styles.bottomPanier}>

        <View style={styles.prixPanier}>
          <Text style={styles.txtPrixPanier}> {prix} euros</Text>
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

