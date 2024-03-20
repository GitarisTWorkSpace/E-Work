import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NoteHeader from '../Note/NoteHeader';
import NoteTitle from '../Note/NoteTitle';
import TimeBox from '../Note/TimeBox';
import NoteControl from '../Note/NoteControl';
import NoteToNote from '../Note/NoteToNote';
import FlexTextInput from '../Note/FlexTextInput';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

const RtpNote = () => {
    const [indexNote, setIndexNote] = useState(1111);

    const [isChecked, setChecked] = useState(false);

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
          <NoteHeader title={'РТП - ' + indexNote} />
          <NoteTitle />
          <TimeBox />
          <ScrollView style={styles.scroll}>
          <View style={styles.rowBox}>
              <Text style={styles.titleTextBottom}>Готовность АВР</Text>
              <Checkbox 
              style={styles.checkBox}
              value={isChecked}
              onValueChange={setChecked}/>
          </View>
          <View style={styles.rowBox}>
              <Text style={styles.titleText}>Вв</Text>
              <Text style={styles.littleText}>1,2</Text>
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
                  <Text style={styles.text}> А;</Text>
              </View>
          </View>
          <View style={styles.rowBox}>
              <Text style={styles.titleText}>Тн</Text>
              <Text style={styles.littleText}>1,2</Text>
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
                  <Text style={styles.text}> кВ;</Text>
              </View>
          </View>
          <View style={styles.box}>
              <Text style={styles.titleTextBottom}>Тиросот : </Text>
              <View style={styles.boxInputsBottom}>
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
                  <Text style={styles.text}> В;</Text>
              </View>
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
                  <Text style={styles.text}> А;</Text>
              </View>
          </View>
          <View style={styles.rowBox}>
              <Text style={styles.titleText}>АПП : </Text>   
              <View style={styles.boxInputs}>
                  <FlexTextInput
                    widthInput={100}
                    heightInput={30}
                    onChangeText={(text) => {console.log(text)}}
                    keyboardType={'numeric'}/>
                  <Text style={styles.text}> В;</Text>
              </View>
          </View>
          <View style={styles.box}>
              <Text style={styles.titleTextBottom}>УКП(ШП) : </Text>
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
                  <Text style={styles.text}> В;</Text>
              </View>
          </View>
          <View style={styles.rowBox}>
              <Text style={styles.titleText}>АШОТ* : </Text>
              <View style={styles.boxInputs}>
                  <FlexTextInput
                    widthInput={100}
                    heightInput={30}
                    onChangeText={(text) => {console.log(text)}}
                    keyboardType={'numeric'}/>
                  <Text style={styles.text}> В; </Text>
                  <FlexTextInput
                    widthInput={100}
                    heightInput={30}
                    onChangeText={(text) => {console.log(text)}}
                    keyboardType={'numeric'}/>
                  <Text style={styles.text}> А;</Text>
              </View>
          </View>
          <View style={styles.box}>
              <Text style={styles.titleTextBottom}>ШУ/ШС* : </Text>
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
                  <Text style={styles.text}> В;</Text>
              </View>              
          </View>
          <View style={styles.endBox}></View>
          </ScrollView>
          <NoteControl addNote={openNote}/>
          <NoteToNote closeNote={closeNote} noteIsClose={noteDisplayStatuse}/>
      </SafeAreaView>
    )
}

export default RtpNote

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    endBox: {
      marginBottom: 100
    },
    rowBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    box:{
        backgroundColor: '#eee',
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleTextBottom:{
        fontSize: 20,
        marginTop: 6,
        marginBottom: 5,
    },
    titleText:{
      fontSize: 20,
      marginTop: 6,
    },
    littleText: {
      position: 'relative',
      top: 5,
      margin: 5,
    },
    text:{
        fontSize: 24,
    },
    boxInputs:{
        flexDirection: 'row',
    },
    boxInputsBottom:{
      flexDirection: 'row',
      marginBottom: 5,
    },
    checkBox: {
      marginLeft: 15
    }
})