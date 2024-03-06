import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 50, 
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      borderBottomWidth: 2,
    },
    text : {
      fontSize: 20,
    }
})