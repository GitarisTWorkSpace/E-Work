import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import TimeBox from '../Note/TimeBox';
import FlexTextInput from '../Note/FlexTextInput';
import Checkbox from 'expo-checkbox';

const ZRY1 = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View>
            <TimeBox title={'ЗРУ-1'}/>
            <View style={styles.rowBox}>
                <Text style={styles.titleText}>С.П. : </Text>   
                <View style={styles.boxInputs}>
                    <FlexTextInput
                      widthInput={100}
                      heightInput={30}
                      onChangeText={(text) => {console.log(text)}}
                      keyboardType={'numeric'}/>
                    <Text style={styles.text}> В;</Text>
                </View>
            </View>
            <View style={styles.rowBox}>
                <Text style={styles.titleTextBottom}>Готовность АВР</Text>
                <Checkbox 
                  style={styles.checkBox}
                 value={isChecked}
                 onValueChange={setChecked}/>
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
                <Text style={styles.titleTextBottom}>Нагрузка(Р) : </Text>
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
                    <Text style={styles.text}> МВт;</Text>
                </View>
            </View>
            <View style={styles.rowBox}>
                <Text style={styles.titleText}>I</Text>
                <Text style={styles.littleText}>о.и</Text>
                <View style={styles.boxInputs}>
                    <FlexTextInput
                      widthInput={100}
                      heightInput={30}
                      onChangeText={(text) => {console.log(text)}}
                      keyboardType={'numeric'}/>
                    <Text style={styles.text}> мА;</Text>
                </View>
            </View>
            <View style={styles.rowBox}>
                <Text style={styles.titleText}>ВУ : </Text>
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
                <Text style={styles.titleText}>ТН</Text>
                <Text style={styles.littleText}>1-4</Text>
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
        </View>
    )
}

export default ZRY1

const styles = StyleSheet.create({
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