import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Private from '../private'
import Public from '../public'

const Setting = () => {

  const { dataUser } = useSelector(state => state)
  console.log('dataUser', dataUser)

  return (
    <View>
      <Text>Setting</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})