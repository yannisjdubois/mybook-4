import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../theme/ecommerce/styles';



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
    <View style={styles.ArticleContent}>
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