import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
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

  // Importation de useState en ajoutant React sans le faire globalement
  // Ajout automatique en global grâce à des extensions
  const [ prix, setPrix ] = React.useState() ;

  console.log('dataPanier:', dataPanier)
  const dispatch = useDispatch() ;

  const remove = () => {

    dispatch(removePanier()) ; // je vide mon panier

    console.log("remove")
  }

  const totalPanier = () => {  // calcule la somme de Panier

    let total = 0 ; // la fonction let est mutable dans le temps
    dataPanier.forEach(element =>
      {
        total = total + element.prix ;
        console.log("total :", total) ;
      })

    setPrix(total) ;  // setPrix permet qu'il s'affiche
  }


  useEffect(()=>{   // gère le cycle de vie de l'application 

    totalPanier() ;

    // On ajoute la variable totalPanier en observable (entre crochet) afin qu'il s'actualise
  },[dataPanier])

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

