import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editLogin, editNombre} from '../../../redux/action';

const Connexion = () => {
  const {nombre} = useSelector(state => state);

  const dispatch = useDispatch();

  const pressConnexion = () => {
    dispatch(editLogin(true));
    console.log('Connexion');
  };

  const nombrePlus = () => {
    dispatch(editNombre(nombre + 1));
    console.log('nombrePlus');
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>

      <Text style={styles.titre}>Login:</Text>

      <TouchableOpacity style={styles.vueinput}>
        <Text style={styles.input}>mariobourgeois97.200@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.vueinput}>
        <Text style={styles.input}>********</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boutonconnexion} onPress={pressConnexion}>
        <Text style={styles.textboutonconnexion}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.boutonincrémentation}
        onPress={nombrePlus}>
        <Text style={styles.textboutonincrémentation}>Incrémentation</Text>
      </TouchableOpacity>

      <Text>Nombre : {nombre}</Text>
      
    </View>
  );
};

export default Connexion;

const styles = StyleSheet.create({
  vueinput: {
    backgroundColor: '#ddddef',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
  },

  input: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  titre: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },

  boutonconnexion: {
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
  textboutonincrémentation: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
  },

});
