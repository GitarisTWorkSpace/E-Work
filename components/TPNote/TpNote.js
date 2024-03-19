import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import NoteHeader from '../NoteHeader';
import NoteTitle from '../NoteTitle';
import TimeBox from '../TimeBox';

const TpNote = (props) => {
    const [indexNote, setIndexNote] = useState(1111);

    let widthOilFirtInput = 150;

    const saveOilFirt = (number) => {
        console.log(number)
        if (number.length > 6){
            widthOilFirtInput = 100 + (number.length - 6) * 10
            console.log(widthOilFirtInput);
        }
    }

    return (
        <SafeAreaView>
            <NoteHeader title={'ТП - ' + indexNote} />
            <NoteTitle />
            <TimeBox />
            <View style={styles.oilBox}>
                <Text style={styles.oilBoxText}>Уровень масла :</Text>
                <View style={styles.oilBoxInputs}>
                    <TextInput 
                        style={[styles.textInput, {width: widthOilFirtInput}]}
                        onChangeText={saveOilFirt}
                        keyboardType='numeric'
                    />
                    <Text style={styles.oilBoxText}> | </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TpNote;

const styles = StyleSheet.create({
    oilBox:{
        backgroundColor: '#eee',
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    oilBoxText:{
        fontSize: 20,
        marginTop: 6,
        marginBottom: 5,
    },
    oilBoxInputs:{
        flexDirection: 'row',
    },
    textInput:{
        height: 30,
        width: 150,
        backgroundColor: '#B4B4B4',
        borderBottomWidth: 1,
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
    }
})