import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import BackSvg from '../svg/BackSvg'

const NoteHeader = (props) => {
  return (
    <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => {
            router.back();
            console.log('Назад')
        }}>
            <BackSvg />
            <Text style={styles.backText}>Назад</Text>
        </Pressable>
        <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

export default NoteHeader

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 50, 
      backgroundColor: '#eee',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      borderBottomWidth: 2,
    },
    text : {
      fontSize: 20,
    },
    backButton: {
        height: 30,
        width: 80,
        position: 'absolute',
        left: 25,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    backText: {
      fontSize: 16,
    }
})