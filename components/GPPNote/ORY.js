import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import TimeBox from '../Note/TimeBox';
import FlexTextInput from '../Note/FlexTextInput';

const ORY = () => {
  return (
    <View>
        <TimeBox title={'ОРУ'}/>
        <View style={styles.box}>
            <Text style={styles.titleTextBottom}>Т1: ур. масла</Text>
            <View style={styles.boxInputs}>
                <Text style={styles.text}>об </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ; авт</Text>
                <Text style={styles.text}>ку </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ; </Text>
                <Text style={styles.text}>кв </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ;</Text>
            </View>
        </View>
        <View style={styles.box}>
            <Text style={styles.titleTextBottom}>Т2: ур. масла</Text>
            <View style={styles.boxInputs}>
                <Text style={styles.text}>об </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ; авт</Text>
                <Text style={styles.text}>ку </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ; </Text>
                <Text style={styles.text}>кв </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ;</Text>
            </View>
        </View>
        <View style={styles.box}>
            <Text style={styles.titleTextBottom}>Т3: ур. масла</Text>
            <View style={styles.boxInputs}>
                <Text style={styles.text}>об </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ; авт</Text>
                <Text style={styles.text}>ку </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ; </Text>
                <Text style={styles.text}>кв </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ;</Text>
            </View>
        </View>
        <View style={styles.box}>
            <Text style={styles.titleTextBottom}>Т4: ур. масла</Text>
            <View style={styles.boxInputs}>
                <Text style={styles.text}>об </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ; авт</Text>
                <Text style={styles.text}>ку </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ; </Text>
                <Text style={styles.text}>кв </Text>
                <FlexTextInput
                  widthInput={75}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> ;</Text>
            </View>
        </View>
        <View style={styles.box}>
            <View style={styles.boxInputs}>
                <Text style={styles.titleText}>Т1 : </Text>
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
                <Text style={styles.text}> в работе</Text>
            </View>
            <View style={styles.boxInputs}>
                <FlexTextInput
                  widthInput={200}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> охл.</Text>
            </View>
        </View>
        <View style={styles.box}>
            <View style={styles.boxInputs}>
                <Text style={styles.titleText}>Т2 : </Text>
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
                <Text style={styles.text}> в работе</Text>
            </View>
            <View style={styles.boxInputs}>
                <FlexTextInput
                  widthInput={200}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> охл.</Text>
            </View>
        </View>
        <View style={styles.box}>
            <View style={styles.boxInputs}>
                <Text style={styles.titleText}>Т3 : </Text>
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
                <Text style={styles.text}> в работе</Text>
            </View>
            <View style={styles.boxInputs}>
                <FlexTextInput
                  widthInput={200}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> охл.</Text>
            </View>
        </View>
        <View style={styles.box}>
            <View style={styles.boxInputs}>
                <Text style={styles.titleText}>Т4 : </Text>
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
                <Text style={styles.text}> в работе</Text>
            </View>
            <View style={styles.boxInputs}>
                <FlexTextInput
                  widthInput={200}
                  heightInput={30}
                  onChangeText={(text) => {console.log(text)}}
                  keyboardType={'numeric'}/>
                <Text style={styles.text}> охл.</Text>
            </View>
        </View>
    </View>
  )
}

export default ORY

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