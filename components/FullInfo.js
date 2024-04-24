import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style'

const FullInfo = ({route}) => {
    // const loadScene = () => {
    //     navigation.goBack()
    // }
  return (
    <View style={gStyle.main}>
      <Image
              source={{uri: route.params.img}}
              style={styles.image}
            />
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text >
      <Text style={styles.full }>{route.params.full}</Text >

      {/* <Button title='Back' onPress={loadScene}/> */}
    </View>
  )
}

export default FullInfo

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginTop: 25
  },
  full: {
    fontFamily: 'mt-bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151'
  },
  image: {
    width: '100%',
    height: 200
  }
})