import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import PlusSvg from './svg/PlusSvg';

const AddNote = (props) => {
  return (
    <View style={styles.addNoteBox}>
      <Pressable onPress={props.addNote} style={styles.addNoteButton}>
        <PlusSvg />
      </Pressable>
    </View>
  )
}

export default AddNote;

const styles = StyleSheet.create({
    addNoteBox: {
        height: 70,
        width: 70,
        borderRadius: 20,
        backgroundColor: '#70F45B',
        position: 'absolute',
        bottom: 95,
        right: 15
    },
    addNoteButton: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})