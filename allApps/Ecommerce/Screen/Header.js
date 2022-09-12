import {Text, View } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../theme/ecommerce/styles';

const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.headerAccueil}>
        <Icon  name="arrow-back" color="black" onPress={() => navigation.navigate('First')} />
        <Text style={styles.nomHeader}>Accueil</Text>
        <View style = {styles.headerZoneDroite}>
        <Icon style = {styles.iconePanier} name="shopping-cart" color="black" onPress={() => navigation.navigate('Panier')}/>  
        <Icon name="search" color="black" onPress={() => navigation.navigate('')}/>  
        </View>
      </View>
  )
}

export default Header