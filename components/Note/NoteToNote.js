import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CloseSvg from '../svg/CloseSvg'
import TrashInNoteSvg from '../svg/TrashInNoteSvg'

const NoteToNote = (props) => {


    const saveNote = (text) => {
        console.log(text.length);
    }

    return (
        <View style={[styles.note, {display: props.noteIsClose}]}>
            <View style={styles.noteHeader}>
                <Pressable style={styles.noteDelete} onPress={props.deleteNote}>
                    <TrashInNoteSvg/>
                </Pressable>
                <Text style={styles.noteTitle}>Заметка</Text>
                <Pressable style={styles.noteClose} onPress={props.closeNote}>
                    <CloseSvg/>
                </Pressable>
            </View>
            <View style={styles.inputBox}>
                <TextInput
                style={styles.inputText}
                onChangeText={saveNote}
                multiline={true}/>
            </View>
        </View>
    )
}

export default NoteToNote

const styles = StyleSheet.create({
    note:{
        backgroundColor: '#eee',
        width: '100%',
        height: 400,
        position: 'absolute',
        bottom: 0,
    },
    noteHeader: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: 40,
        borderTopWidth: 2,
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    noteTitle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20,
    },
    noteDelete: {
        height: 30,
        width: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F86E6E',
        borderRadius: 6,
    },
    noteClose: {
        height: 30,
        width: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7ECED3',
        borderRadius: 6,
    },
    inputBox: {
        flex: 1,
    },
    inputText: {
        fontSize: 20,
        backgroundColor: '#ddd',
        padding: 10,
    }
})