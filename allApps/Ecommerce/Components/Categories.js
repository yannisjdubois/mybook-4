import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { styles } from '../../../theme/ecommerce/styles';

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
      <View style={styles.CategoryContent}>
        <Text style={styles.CategoryTitle}>Catégories</Text>

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