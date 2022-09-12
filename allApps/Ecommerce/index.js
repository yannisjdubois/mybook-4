import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Setting from './Screen/Setting';
import {FirebaseContext} from '../../firebaseContext';
import { useDispatch } from 'react-redux';
import { addCategorie } from '../../redux/action';
import { addArticle } from '../../redux/action';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './Details';
import Panier from './Screen/Panier';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Accueil = () => {

  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Home' component ={Home}/>
    <Stack.Screen name='Details' component ={Details}/>
    </Stack.Navigator>
  )

}

const App = () => {

  const dispatch = useDispatch ();

  const firebase = useContext(FirebaseContext);

  const initCategories = async () => {

      const categories = await firebase.getCategories();

      if (!categories.empty) {

        categories.forEach( categorieData => {

          // Version structurer
          // const tempCategorie = {
          //   id: categorieData.id,
          //   nom: categorieData.data().nom
          // } 

          //Version destructurer
          const tempCategorie = {
            id: categorieData.id,
            ...categorieData.data()
          } 

          // console.log("First", )

          dispatch (addCategorie(tempCategorie))
        })

        // console.log ("pas vide")
      }
  }

  const initArticles = async () => {

    const articles = await firebase.getArticles();

    if (!articles.empty) {

      articles.forEach( articleData => {

        // Version structurer
        // const tempArticle = {
        //   id: articleData.id,
        //   nom: articleData.data().nom
        // } 

        //Version destructurer
        const tempArticle = {
          id: articleData.id,
          ...articleData.data()
        } 

        // console.log("First", )

        dispatch (addArticle(tempArticle))
      })

      // console.log ("pas vide")
    }
}

  useEffect (() => {

    initCategories ();
    initArticles ();

  }, [])

  return (

    <Tab.Navigator screenOptions={{headerShown: false,
       
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "black",
      tabBarActiveBackgroundColor: '#26a69a',
      tabBarInactiveBackgroundColor: 'white',

      tabBarStyle: {
                      backgroundColor: 'white',
                }

    }}>

      <Tab.Screen  name="Accueil" component={Accueil}/>
      <Tab.Screen  name="Panier" component={Panier}/>
      <Tab.Screen name="Compte" component={Setting} />

    </Tab.Navigator>

  );
};

export default App;
