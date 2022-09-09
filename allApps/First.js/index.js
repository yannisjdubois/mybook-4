import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {dataApp} from '../../datas/first';
import RenderItem from './components/RenderItem';
import { Icon } from "@rneui/themed";
import { styles } from '../AppNews/theme/styles'; 
const Index = ({}) => {
  return (
    <View>
      <View style={styles.headerNews}>
        <Icon style={styles.icon} name="menu" color="purple"  />
        <Text style={styles.news}>First</Text>
        <Icon style={styles.icon} name="search" color="purple" />
      </View>
      <FlatList
        data={dataApp}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Index;
