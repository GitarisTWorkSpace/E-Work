import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const DateBox = () => {
    const [data, setData] = useState('01.01.1111');

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();

    const dateNow = () => {
        setData(dd + '.' + mm + '.' + year);
        console.log(data);
    }
    return (
        <View style={styles.date}>
            <Pressable onPress={dateNow} style={styles.dateButton}>
                <Text style={styles.dateText}>{data}</Text> 
            </Pressable>
          </View>
      )
}

export default DateBox

const styles = StyleSheet.create({
    date: {
        marginTop: 40,
        width: '100%',
        height: 40,
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 20
    }
})