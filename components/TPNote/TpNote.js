import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import NoteHeader from '../Note/NoteHeader';
import NoteTitle from '../Note/NoteTitle';
import TimeBox from '../Note/TimeBox';
import NoteControl from '../Note/NoteControl';
import NoteToNote from '../Note/NoteToNote';
import FlexTextInput from '../Note/FlexTextInput';

const TpNote = (props) => {
    const [indexNote, setIndexNote] = useState(1111);

    const [noteIsClose, setNoteIsClose] = useState(false);
    const [noteDisplayStatuse, setNoteDisplayStatuse] = useState('none');

    const openNote = () => {
        setNoteIsClose(true);
        setNoteDisplayStatuse('flex');
    }

    const closeNote = () => {
        setNoteIsClose(false);
        setNoteDisplayStatuse('none');            
    }

    return (
        <SafeAreaView style={styles.main}>
            <NoteHeader title={'ТП - ' + indexNote} />
            <NoteTitle />
            <TimeBox />
            <View style={styles.box}>
                <Text style={styles.titleText}>Уровень масла :</Text>
                <View style={styles.boxInputs}>
                    <FlexTextInput
                    widthInput={100}
                    heightInput={30}
                    onChangeText={(text) => {console.log(text)}}
                    keyboardType={'numeric'}/>
                    <Text style={styles.text}> | </Text>
                    <FlexTextInput
                    widthInput={100}
                    heightInput={30}
                    onChangeText={(text) => {console.log(text)}}
                    keyboardType={'numeric'}/>
                    <Text style={styles.text}> ;</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.titleText}>Уровень масла :</Text>
                <View style={styles.boxInputs}>
                    <FlexTextInput
                    widthInput={100}
                    heightInput={30}
                    onChangeText={(text) => {console.log(text)}}
                    keyboardType={'numeric'}/>
                    <Text style={styles.text}> | </Text>
                    <FlexTextInput
                    widthInput={100}
                    heightInput={30}
                    onChangeText={(text) => {console.log(text)}}
                    keyboardType={'numeric'}/>
                    <Text style={styles.text}> ;</Text>
                </View>
            </View>
            <NoteControl addNote={openNote}/>
            <NoteToNote closeNote={closeNote} noteIsClose={noteDisplayStatuse}/>
        </SafeAreaView>
    )
}

export default TpNote;

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    box:{
        backgroundColor: '#eee',
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleText:{
        fontSize: 20,
        marginTop: 6,
        marginBottom: 5,
    },
    text:{
        fontSize: 24,
    },
    boxInputs:{
        flexDirection: 'row',
    },
})