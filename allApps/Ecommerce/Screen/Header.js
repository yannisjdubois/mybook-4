import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
    headerAccueil: {
            height:50,
            width:"100%",
            backgroundColor:'#e9b87c',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:"center",
            padding:10,
    },

    nomHeader: {
      fontSize:18,
      color:'black',
      alignSelf:'center'
    },

    headerZoneDroite: {
      flexDirection:'row',
    },

    iconePanier: {
      paddingRight:5
    }

})