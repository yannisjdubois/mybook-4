import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Input, Icon } from "@rneui/themed";

const Inscription = () => {

    const navigation = useNavigation() ;

    const goToConnexion = () => {
        navigation.navigate('Connexion') ;
      }

  return (
    <View>
      <Text>Inscription</Text>

      <Input
      placeholder='Votre e-mail'
      leftIcon={
        <Icon
          name='email'
          type='entypo'
          size={24}
          color='black'
        />
      }
    />

      <Button
        onPress={goToConnexion}
        title="Connexion"
        type="clear" />
    </View>
  )
}

export default Inscription