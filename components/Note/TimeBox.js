import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ClockSvg from '../svg/ClockSvg';

const TimeBox = () => {
    const [time, setTime] = useState('01:10'); 

    const timeNow = () => {        
        let today = new Date();
        let hh = String(today.getHours());
        let mm = String(today.getMinutes());
        setTime(hh + ':' + mm);
        console.log(time);      
    }

    return (
        <View style={styles.timeBox}>
            <Text style={styles.timeText}>{time}</Text>
            <Pressable style={styles.clockBtn} onPress={timeNow}>
                <ClockSvg />
            </Pressable>
        </View>
    )
}

export default TimeBox

const styles = StyleSheet.create({
    timeBox:{
        marginTop: 20,
        height: 40,
        width: '100%',
        backgroundColor: '#eee',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 15,
    },
    clockBtn: {
        height: 40,
        width: 40,
        marginRight: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})