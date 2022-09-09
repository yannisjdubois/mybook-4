import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';
import {Icon} from '@rneui/themed';

const Item = ({nom, prenom, image}) => (
  
  <View>
  
    

    <View>
    
        <Text style={styles.title}>
          {nom} {prenom}
        </Text> 
        <Image>{image}</Image>
    </View>
  </View>
);

const App = () => {
  const renderItem = ({item}) => (
    
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Item nom={item.nom} prenom={item.prenom} />
    </View>
  );

  const [data, setData] = useState([]);

  // onResult = () => {

  //   console.log("Result")
  // },

  // onError = () => {

  //   console.log("Error")
  // },

  //Chargement de mon composant
  useEffect(() => {
    firestore()
      .collection('stagiaires')
      .onSnapshot(snapShot => {
        // console.log('snapshot', snapShot);
        let dataTemp = [];
        snapShot.forEach(document => {
          dataTemp.push({id: document.id, ...document.data()});
          setData(dataTemp);
          console.log('document', dataTemp);
        });
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  item: {
    flex:1,
    flexDirection:"row",
    backgroundColor: '#256cd8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginHorizontal:15,
    paddingTop:20
  },

  image: {height: 70,
     width: 70,
     borderRadius:50,
  },

  headerlist: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 50,
    padding: 10,
    justifyContent: 'space-between',
    flex:1
  }

});

export default App;
