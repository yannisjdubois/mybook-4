import {Text, FlatList, Button, ActivityIndicator, TouchableOpacity, View } from 'react-native'
import React from 'react'

import ItemNews from './components/ItemNews'

import { useState, useEffect } from 'react'

import { apiNews } from './function/api'

import RenderEmptyComponent from './components/RenderEmptyComponent'

import Header from '../AppNews/components/Header';


// Clé api: f57e50c8398045eab8e7a7b34e58a8bd

const NewsScreen = () => {

    const [getNews, setNews] = useState([]);

    //Création constante waiting
    const [waiting,setWaiting] = useState (false);

  //gestion de la pagination
  const [getPage,setPage] = useState(1)
    const loadNews = async () => {
      //chargement de mon api
      const articles = await apiNews(getPage);
      setWaiting(true);
      setTimeout(() => {
       setNews(articles)
        setWaiting(false);

      },2000);
        
    }  

    //chargement page suivante /load more
    const nextPage = async () => {
      setPage(getPage + 1);

      loadNews();
    }

    useEffect (() => {
      setWaiting(true);
      //Chargement de mon Api
      loadNews()
    },[])

    
  return (

<View>

  <Header/>

<FlatList  

    data = {getNews}
    renderItem = {({item}) => <ItemNews item = {item} />}
    keyExtractor = {(item,index) => 'key' + index}

    ListHeaderComponent={<Button
      title='Plus'
      color="#9e9e9e"
      
      onPress={nextPage}/>}
      ListEmptyComponent= {<RenderEmptyComponent waiting = {waiting}/>}
      ListFooterComponent = {(waiting && getNews.length > 0) && <ActivityIndicator/>}
/>
</View>
  )
}

export default NewsScreen