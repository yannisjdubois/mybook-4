import { View, Text ,FlatList, Button} from 'react-native'
import React from 'react'
import { useState } from 'react'

import firestore from '@react-native-firebase/firestore';


const Index = () => {
    const [getNombre, setNombre] = useState([1,2,3,4,5,6,7,8,9,10])

    const readStagiaire =  async () => {
        const user = await firestore().collection
        ('stagiaires').doc('uaiY3YS1utVl2o1afqwn').get();
        console.log('user', user)
    }

    const addNombre = async () => {

       await readStagiaire();
      
        console.log(getNombre.length)

        const tempNombre = [...getNombre,getNombre.length+1]
        setNombre(tempNombre)
    }
  return (
    <FlatList

    ListHeaderComponent={<Button 
        
    title='Add'
    onPress={addNombre}/>}

    //Reçoit les données
        data={getNombre}
    //Rend les données
        renderItem={({item}) => <Text>{item}</Text>}
    //Attribut une clé
        keyExtractor={item=>item}

    //   {* Infinity Scroll *}
    //Ajout des nombres
        onEndReached = {addNombre}
    //déclenche l'ajout de nombres quand arriver à cette hauteur
        onEndReachedThreshold = {0.2}
    />
  )
}

export default Index