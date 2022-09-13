import { Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from "@rneui/themed";

const Connexion = () => {

  const navigation = useNavigation() ;

  const goToInscription = () => {
    navigation.navigate('Inscription') ;
  }

  return (
    <View>
      <Text>Connexion</Text>
      <Button
        onPress={goToInscription}
        title="Inscrivez-vous !"
        type="clear" />
    </View>
  )
}

export default Connexion