import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Avatar, BackgroundImage, Button, ListItem } from '@rneui/base'
import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'
import firestore from '@react-native-firebase/firestore';
import moment from 'moment/moment'

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

  const {dataPanier, dataUser} = useSelector (state => state);

  // Importation de useState en ajoutant React sans le faire globalement
  // Ajout automatique en global grâce à des extensions
  const [ montantTotal, setMontantTotal ] = React.useState() ;

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
        total = total + Number(element.prix) * element.quantite ;
        console.log("total :", total) ;
      })

      setMontantTotal(total) ;  // setPrix permet qu'il s'affiche
  }

  // avec async j'attend la création de la commande
  const addCommande = async () => {

    const commandeValue = {
                  etat:false,
                  total:montantTotal,

                  uid: dataUser.uid,
                  date:moment(new Date()).format()
    }

    console.log("dataUser", dataUser.uid) ;

    // Ajouter une commande à Firebase
    // La constante commande de type away permet de récupérer les données de la commande
    // Création de ma commande
    const commande = await firestore().collection("Commandes").add(commandeValue)

    console.log("commande", commande.id) ;

    dataPanier.map(async element=>{

      // Ajouter le contenu de ma commande
      // Ajout des details du panier dans la sous-collection
      await firestore().collection("Commandes").doc(commande.id)
                        .collection("Detail").add(element)
    })

    remove() ;

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
          <Text style={styles.txtPrixPanier}> {montantTotal} euros</Text>
        </View>

        <View style={styles.acheter}>
          <Button
            buttonStyle={styles.BoutonAcheter}
            onPress={addCommande}
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

