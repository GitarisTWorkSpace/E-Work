import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import NoteHeader from '../NoteHeader';
import NoteTitle from '../NoteTitle';

const TpNote = () => {
    const [indexNote, setIndexNote] = useState(1111);

    return (
        <SafeAreaView>
            <NoteHeader title={'ТП - ' + indexNote} />
            <NoteTitle />
        </SafeAreaView>
    )
}

export default TpNote;

const styles = StyleSheet.create({
})