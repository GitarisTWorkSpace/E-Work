import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link, router } from 'expo-router';
import React from 'react';

const HomePage = () => {
  return (
    <View style={styles.content}>
        <Pressable onPress={() => 
          { 
            router.push({
              pathname: '/GPP/',
            });
            console.log('Перейти в ГПП');
          }} style={styles.button}>
          <Text style={styles.textButton}>ГПП</Text>
        </Pressable>
        <Pressable onPress={() => 
          {
            router.push({
              pathname: '/TP/',
            });
            console.log('Перейти в ТП');
          }} style={styles.button}>
          <Text style={styles.textButton}>ТП</Text>
        </Pressable>
        <Pressable onPress={() => 
          {
            router.push({
              pathname: '/RTP/',
            });
            console.log('Перейти в РТП');
          }} style={styles.button}>
          <Text style={styles.textButton}>РТП</Text>
        </Pressable>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    content: {
      flex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      height: 40,
      marginBottom: 20,
      backgroundColor: '#78ABF8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton: {
      fontSize: 20,
    }
})