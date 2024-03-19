import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import NoteHeader from '../NoteHeader';
import NoteTitle from '../NoteTitle';
import TimeBox from '../TimeBox';
import NoteControl from '../NoteControl';

const TpNote = (props) => {
    const [indexNote, setIndexNote] = useState(1111);

    const [widthOilFirstInput, setWidthOilFirstInput] = useState(100);
    const [widthOilSecondInput, setWidthOilSecondInput] = useState(100);

    const [widthTempFirstInput, setWidthTempFirstInput] = useState(100);
    const [widthTempSecondInput, setWidthTempSecondInput] = useState(100);

    // const changeWidthInput = (number, count, maxWidth, setWidth) => {
    //     if (number.length > count){
    //         setNumber(100 + (number.length - count) * 10);
    //     } else if ()
    // }

    const saveOilFirst = (number) => {
        console.log(number)
        if (number.length > 8){
            setWidthOilFirstInput(100 + (number.length - 8) * 10);
            console.log(widthOilFirstInput);
        }
    }

    const saveOilSecond = (number) => {
        console.log(number)
        if (number.length > 8){
            setWidthOilSecondInput(100 + (number.length - 8) * 10);
            console.log(widthOilSecondInput);
        }
    }

    const saveTempFirst = (number) => {

    }

    const saveTempSecond = (number) => {

    }

    return (
        <SafeAreaView style={styles.main}>
            <NoteHeader title={'ТП - ' + indexNote} />
            <NoteTitle />
            <TimeBox />
            <View style={styles.box}>
                <Text style={styles.titleText}>Уровень масла :</Text>
                <View style={styles.boxInputs}>
                    <TextInput 
                        style={[styles.textInput, {width: widthOilFirstInput}]}
                        onChangeText={saveOilFirst}
                        keyboardType='numeric'
                    />
                    <Text style={styles.text}> | </Text>
                    <TextInput 
                        style={[styles.textInput, {width: widthOilSecondInput}]}
                        onChangeText={saveOilSecond}
                        keyboardType='numeric'
                    />
                    <Text style={styles.text}> ;</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.titleText}>Уровень масла :</Text>
                <View style={styles.boxInputs}>
                    <TextInput 
                        style={[styles.textInput, {width: widthTempFirstInput}]}
                        onChangeText={saveTempFirst}
                        keyboardType='numeric'
                    />
                    <Text style={styles.text}> | </Text>
                    <TextInput 
                        style={[styles.textInput, {width: widthTempSecondInput}]}
                        onChangeText={saveTempSecond}
                        keyboardType='numeric'
                    />
                    <Text style={styles.text}> ;</Text>
                </View>
            </View>
            <NoteControl />
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
        marginTop: 20,
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