import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from '../theme/styles'
import { useNavigation } from '@react-navigation/native';

const ItemNews = ({item}) => {
  const navigation = useNavigation();
  return (
    

   
      <TouchableOpacity
     style = {styles.content}
      onPress={() => {
        navigation.navigate('DetailsNews', {item:item});
      }}>

      <View style= {styles.viewImg}>
        <Image style = {styles.Image} source = {{uri:item.image}} />
      </View>

      <View style= {styles.viewTxt}>
      <Text style= {styles.TxtTitre}>{item.title}</Text> 
      </View>
      
      </TouchableOpacity>
  
  
  )
}

export default ItemNews