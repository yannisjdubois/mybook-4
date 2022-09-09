import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
const Insta = () => {

  const {login} = useSelector (state => state)

  return (
    <View>
      {login?<Text >Est connecté</Text>:
            <Text>N'est pas connecté</Text>}
    </View>
  );
};

export default Insta;
