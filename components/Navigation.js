import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Navigation = (props) => {
  return (
    <View style={styles.navBar}>
        <Pressable onPress={() => {console.log('Перейти в ТП')}} style={styles.button}>
            <View style={styles.noteTitle}>
                <Text style={styles.textTitle}>ТП</Text>
            </View>
            <View style={styles.countBox}>
                <View style={styles.countBorder}>
                    <Text style={styles.countText}>{props.TPNoteCount}</Text>
                </View>
            </View>
        </Pressable>
        <Pressable onPress={() => {console.log('Перейти в ГПП')}} style={styles.button}>
            <View style={styles.noteTitle}>
                <Text style={styles.textTitle}>ГПП</Text>
            </View>
            <View style={styles.countBox}>
                <View style={styles.countBorder}>
                    <Text style={styles.countText}>{props.GPPNoteCount}</Text>
                </View>
            </View>
        </Pressable>
        <Pressable onPress={() => {console.log('Перейти в РТП')}} style={styles.button}>
            <View style={styles.noteTitle}>
                <Text style={styles.textTitle}>РТП</Text>
            </View>
            <View style={styles.countBox}>
                <View style={styles.countBorder}>
                    <Text style={styles.countText}>{props.RTPNoteCount}</Text>
                </View>
            </View>
        </Pressable>
    </View>
  )
}

export default Navigation

const styles = StyleSheet.create({
    navBar:{
        height: 80,
        width: '100%',
        backgroundColor: '#eee',
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 2,
    },
    noteTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    textTitle: {
        fontSize: 20,
    },
    countBox:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    countBorder: {
        borderWidth: 2,
        borderColor: '#222',
        borderRadius: 15,
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    countText: {
        fontSize: 20,
    }
})