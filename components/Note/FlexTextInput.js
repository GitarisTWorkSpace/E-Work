import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const FlexTextInput = (props) => {
    const [widthInput, setWidthInput] = useState(props.widthInput)

    const flexWidthInput = (text) => {
        if (text.length > 8){
            setWidthInput(Math.min(props.widthInput + (text.length - 8) * 10, props.widthInput * 2))
        }
        props.onChangeText(text)
    }

    return (
        <TextInput 
            style={[styles.textInput, {width: widthInput, height: props.heightInput}]}
            onChangeText={flexWidthInput}
            keyboardType={props.keyboardType}
        />
    )
}

export default FlexTextInput

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#B4B4B4',
        borderBottomWidth: 1,
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
    }
})