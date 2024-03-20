import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NoteHeader from '../Note/NoteHeader';
import NoteTitle from '../Note/NoteTitle';
import NoteControl from '../Note/NoteControl';
import NoteToNote from '../Note/NoteToNote';
import React, { useState } from 'react';
import ZRY1 from './ZRY1';
import ZRY2 from './ZRY2';
import ORY from './ORY';

const GppNote = () => {
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
          <NoteHeader title={'ГПП - ' + indexNote} />
          <NoteTitle />
          <ScrollView>
              <ZRY1/>
              <ZRY2/>
              <ORY/>
              <View style={styles.endBox}></View>
          </ScrollView>
          <NoteControl addNote={openNote}/>
          <NoteToNote closeNote={closeNote} noteIsClose={noteDisplayStatuse}/>
      </SafeAreaView>
    )
}

export default GppNote

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  endBox: {
    marginBottom: 100
  }
})