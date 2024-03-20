import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TrashSvg from '../svg/TrashSvg';
import NoteSvg from '../svg/NoteSvg';

const NoteControl = (props) => {
    return (
        <View style={styles.controlBox}>
            <Pressable style={styles.trashBtn} onPress={() => {console.log('Удалить заметку')}}>
                <TrashSvg />
            </Pressable>
            <Pressable style={styles.editBtn} onPress={props.addNote}>
                <NoteSvg />
            </Pressable>
        </View>
    )
}

export default NoteControl

const styles = StyleSheet.create({
  controlBox: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
  },
  trashBtn:{
    height: 70,
    width: 70,
    backgroundColor: '#F86E6E',
    borderRadius: 20,
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  editBtn: {
    height: 70,
    width: 70,
    backgroundColor: '#7ECED3',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 15,
  },
})