import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Deconnexion from './Deconnexion'
import { useSelector } from 'react-redux/'

import Public from './Deconnexion'


const Private = () => {
  const {login} = useSelector(state => state)
  return (
  
    <View>
      <Text style={styles.titre}>Connexion réussie, Bienvenue!</Text>
     {!login? <Deconnexion/>:
                <Public/>}
    </View>
  )
}

export default Private

const styles = StyleSheet.create({
titre: {
  color:"white",
  fontSize:20,
  textAlign:"center",
  marginBottom:15,
  fontWeight:"bold"
},

})