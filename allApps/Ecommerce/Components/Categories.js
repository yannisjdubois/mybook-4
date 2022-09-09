import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import Header from '../Screen/Header';

const RenderCategorie = ({categorie}) => {
  useSelector(state => state);
  return (
    <TouchableOpacity style={styles.touchCategorie}>
      <Text style={styles.textCategorie}>{categorie.nom}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const {dataCategorie} = useSelector(state => state);
  console.log('dataCategorie:', dataCategorie);

  return (
    <View>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Catégories</Text>

        <FlatList
          data={dataCategorie}
          horizontal={true}
          renderItem={({item}) => <RenderCategorie categorie={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  content: {
    width: '100%',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },

  touchCategorie: {
    backgroundColor: '#e9b87c',
    marginLeft: 10,
    padding: 10,
    borderRadius: 30,
    height: 45,
    width: 150,
  },

  textCategorie: {
    fontSize: 17,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },

  


});
