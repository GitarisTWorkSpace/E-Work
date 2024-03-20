import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import EditSvg from '../svg/EditSvg'

const NoteTitle = (props) => {
    return (
        <View style={styles.noteTitle}>
            <Text style={styles.textNumber}>Номер</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={props.changeNoteIndex}
                value={props.noteIndex}
                keyboardType='numeric'
                maxLength={6}
            />       
            <Pressable style={styles.editBtn} onPress={() => {console.log('Изменить номер записки')}}>
                <EditSvg style={styles.editSvg}/> 
            </Pressable>  
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
    textNumber:{
        marginLeft: 25,
        marginRight: 10,
        fontSize: 20,        
    },
    textInput: {
        width: 90,
        height: '100%',
        backgroundColor: '#B4B4B4',
        borderBottomWidth: 1,
        fontSize: 20,
        paddingLeft: 10,
    },
    editBtn: {
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 25,
    },
})