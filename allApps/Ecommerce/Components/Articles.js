import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

const RenderArticle = ({article}) => {

  const navigation = useNavigation();

  const onPressArticle = () => {
    navigation.navigate("Details", {id:article.id})
  }

  useSelector ( state => state)

    return (
      
        <TouchableOpacity style={styles.touchArticle} onPress={onPressArticle}>

            <Image style={styles.image} source={{uri: article.image}} />
            <Text style={styles.textArticle}>
                {article.nom} 
            </Text>
            <Text style={styles.prix}>{article.prix} € Qte:{article.quantite}</Text>
        </TouchableOpacity>
        
    )

}

const Articles = () => {

  const {dataArticle} = useSelector (state => state);
  console.log("dataArticle:", dataArticle)

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Articles</Text>

      <FlatList
        data = {dataArticle}
        horizontal = {false}
        numColumns = {2}
        renderItem = {({item}) => <RenderArticle
        article = {item}/>} 
        keyExtractor = {item => item.id}
      />

    </View>

  );
  
};

export default Articles;

const styles = StyleSheet.create({
  content: {
  flex:1,
  margin:10
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'black',
  },

  touchArticle: {
    backgroundColor:'#e9b87c',
    margin:5,
    padding:10,
    borderRadius:8,
    height:250,
    width:160,
  },

  textArticle: {
    fontSize:18,
    color:"black",
    fontWeight:'500',
    marginBottom:5,
    textAlign:"center"
  },

  header: {
    backgroundColor:"#e9b87c"
  },

  image: {
    borderRadius:5,
    height: 170,
     width: 140,
     marginBottom:5
  },
  prix: {
    fontSize:18,
    color:"black",
    fontWeight:'500',
  },

 
});
