import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Input, Icon } from "@rneui/themed";

const Inscription = () => {

    const navigation = useNavigation() ;

    const [AffMotDePasse, setAffMotDePasse] = useState(true)

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
            name='alternate-email'
            type='materialicons'
            size={24}
            color='black'
            />
        }
        />

      <Input
      placeholder='Votre mot de passe'
      secureTextEntry={AffMotDePasse}
      leftIcon={
            <Icon
            name='lock'
            type='materialicons'
            size={24}
            color='black'
            />
        }
      rightIcon={
            <Icon
            name='eye-with-line'
            type='entypo'
            onPress={()=>setAffMotDePasse(!AffMotDePasse)}
            size={24}
            color='black'
            />
        }
        />

      <Button
        onPress={goToConnexion}
        title="Je me connecte !"
        type="clear" />
    </View>
  )
}

export default Inscription