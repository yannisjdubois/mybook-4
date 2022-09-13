import { View, Text } from 'react-native'
import React, {useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Input, Icon } from "@rneui/themed";

import Firebase from '../../../firebaseContext';

const Inscription = () => {

    const navigation = useNavigation() ;

    const [AffMotDePasse, setAffMotDePasse] = useState(true)
    const [email, setEmail] = useState()
    const [motDePasse, setMotDePasse] = useState()
    const firebase = useContext(Firebase)

    const goToConnexion = () => {
        navigation.navigate('Connexion') ;
      }

      const save = () => {
        console.log("save", email, motDePasse )

        firebase.auth()
        .createUserWithEmailAndPassword(email, motDePasse)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {

        //   if (error.code === 'auth/email-already-in-use') {
        //     console.log('That email address is already in use!');
        //   }
      
        //   if (error.code === 'auth/invalid-email') {
        //     console.log('That email address is invalid!');
        //   }
      
          console.error(error);
        });
      }

  return (
    <View>
      <Text>Inscription</Text>

      <Input
      placeholder='Votre e-mail'
      onChangeText={value => setEmail(value)}
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
      onChangeText={value => setMotDePasse(value)}
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
            name={AffMotDePasse?'eye-with-line':'eye'}
            type='entypo'
            onPress={()=>setAffMotDePasse(!AffMotDePasse)}
            size={24}
            color='black'
            />
        }
        />

      <Button
        onPress={goToConnexion}
        title="Je me connecte"
        type="clear"
        buttonStyle={{
            backgroundColor: 'black',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
          }}
          containerStyle={{
            width: -100,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: 'bold' }}
          onPress={save}
        />

      <Button
        onPress={goToConnexion}
        title="Pas encore de compte ? Je m'inscris !"
        type="clear"
        />
        
    </View>
  )
}

export default Inscription