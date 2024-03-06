import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const NoteTitle = (props) => {
    return (
        <View style={styles.noteTitle}>
            <Text>Номер</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={props.changeNoteIndex}
                value={props.noteIndex}
                keyboardType='numeric'
                maxLength={6}
            />          
        </View>
      )
}

export default NoteTitle

const styles = StyleSheet.create({
    noteTitle: {
        marginTop: 40,
        width: '100%',
        height: 40,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        width: 90,
        height: '100%',
        backgroundColor: '#aaa',
        borderBottomWidth: 2,
        fontSize: 20,
    }
})