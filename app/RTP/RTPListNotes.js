import { Pressable, StyleSheet, Text, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '../../components/Navigation';
import DateBox from '../../components/DateBox';
import AddNote from '../../components/AddNote';

const RTPListNotes = () => {
  return (
    <SafeAreaView style={styles.main}>
        <Header title={"РТП"}/>
        <DateBox />
        <ScrollView style={styles.noteList}>
            <Pressable style={styles.noteButton} onPress={() => {
                router.push({
                    pathname: '/RTPNote/1111'
                });
            }}>
                <Text style={styles.noteTitleText}>РТП - 1111</Text>
            </Pressable>
            <Pressable style={styles.noteButton} onPress={() => {
                router.push({
                    pathname: '/RTPNote/2222'
                });
            }}>
                <Text style={styles.noteTitleText}>РТП - 2222</Text>
            </Pressable>
            <Pressable style={styles.noteButton} onPress={() => {
                router.push({
                    pathname: '/RTPNote/3333'
                });
            }}>
                <Text style={styles.noteTitleText}>РТП - 3333</Text>
            </Pressable>
        </ScrollView>
        <AddNote addNote = { () => {
            router.push({
                pathname: '/RTPNote/1'
            })
            console.log('Новая РТП заметка')
            }}/>
        <Navigation TPNoteCount={99} GPPNoteCount={99} RTPNoteCount={99}/>
    </SafeAreaView>
  )
}

export default RTPListNotes

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    noteList: {
        marginTop: 20,
        marginBottom: 20
    },
    noteButton: {
        width: '100%',
        height: 40,
        marginBottom: 20, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#78ABF8'
    },
    noteTitleText: {
        fontSize: 20
    }
});