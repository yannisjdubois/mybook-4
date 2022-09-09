import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from '../theme/styles'
import { Icon } from "@rneui/themed";


const Details = ({route, navigation}) => {
    const { item } = route.params;
  return (  
    <View style={styles.viewcards}>
        <View style={styles.headerNews}>
        <Icon style={styles.icon} name="arrow-back" color="purple" onPress={() => navigation.navigate('AppNews')}/>
        <Text style={styles.news}>Détails</Text>
        <Icon style={styles.icon} name="search" color="purple" />
      </View>

    <View style={styles.cards}>

    <View style={styles.viewTxtCard}>
    <Image style = {styles.ImageCard}  source = {{uri:item.image}} />
    </View>
      <Text style = {styles.titreCard}>{item.title}</Text>
      <Text style = {styles.descriptionCard}>{item.description}</Text>
    </View>
    </View>
  )
}

export default Details