import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../theme/styles'
import { Icon } from "@rneui/themed";
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  return (

    
       <View style={styles.headerNews}>
        <Icon style={styles.icon} name="arrow-back" color="purple" onPress={() => navigation.navigate('First')} />
        <Text style={styles.news}>News</Text>
        <Icon style={styles.icon} name="search" color="purple" />
      </View>
    
  )
}

export default Header