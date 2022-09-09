import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './allApps/First.js';
import News from './allApps/AppNews/';
import Insta from './allApps/Insta/';
import Tuto from './TutoFlatList/index.js';
import Details from './allApps/AppNews/components/Details.js';
import Ecommerce from './allApps/Ecommerce';
import store from './redux/store';
import {Provider} from 'react-redux';
import auth from '@react-native-firebase/auth';
import TutoFireList from './allApps/TutoFireList/index';

const Stack = createNativeStackNavigator();

const App = () => {
  auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });
  
  return (
    
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="First" component={FirstScreen} />

          {/* News app screen */}
          <Stack.Screen name="AppNews" component={News} />
          <Stack.Screen name="DetailsNews" component={Details} />

          <Stack.Screen name="AppInsta" component={Insta} />

          <Stack.Screen name="AppTuto" component={Tuto} />

          <Stack.Screen name="AppTutoFireList" component={TutoFireList} />

          <Stack.Screen options={{headerShown: false}} name="AppEcommerce" component={Ecommerce} />

        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
    
  );
};

export default App;

const styles = StyleSheet.create({});
