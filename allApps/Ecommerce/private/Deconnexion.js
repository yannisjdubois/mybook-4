import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {editLogin} from '../../../redux/action';

const Deconnexion = () => {
  const dispatch = useDispatch();
  const pressDeconnexion = () => {
    dispatch(editLogin(false));
    console.log('Deconnexion');
  };
  
  return (

    <View style={{flex: 1, alignItems: 'center'}}>

      <TouchableOpacity
        style={styles.boutondeconnexion}
        onPress={pressDeconnexion}>
        <Text style={styles.textboutondeconnexion}>Déconnexion</Text>
      </TouchableOpacity>

    </View>

  );
};

export default Deconnexion;

const styles = StyleSheet.create({
  boutondeconnexion: {
    margin: 5,
    backgroundColor: '#ddddef',
    height: 35,
    borderRadius: 5,
    width: 200,
  },

  boutonincrémentation: {
    margin: 5,
    backgroundColor: '#ddddef',
    height: 35,
    borderRadius: 5,
    width: 150,
  },

  textboutonconnexion: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
  },

  textboutondeconnexion: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
  },
});
