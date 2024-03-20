import { Pressable, StyleSheet, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '../../components/Navigation';
import DateBox from '../../components/DateBox';
import AddNote from '../../components/AddNote';
import { router } from 'expo-router';

const TPListNotes = () => {
    return (
        <SafeAreaView style={styles.main}>
            <Header title={"ТП"}/>
            <DateBox />
            <ScrollView style={styles.noteList}>
                <Pressable style={styles.noteButton} onPress={() => {
                    router.push({
                        pathname: '/TPNote/1111',
                    });
                }}>
                    <Text style={styles.noteTitleText}>ТП - 1111</Text>
                </Pressable>
                <Pressable style={styles.noteButton} onPress={() => {
                    router.push({
                        pathname: '/TPNote/2222'
                    });
                }}>
                    <Text style={styles.noteTitleText}>ТП - 2222</Text>
                </Pressable>
                <Pressable style={styles.noteButton} onPress={() => {
                    router.push({
                        pathname: '/TPNote/3333'
                    });
                }}>
                    <Text style={styles.noteTitleText}>ТП - 3333</Text>
                </Pressable>
            </ScrollView>
            <AddNote addNote = { () => {
                router.push({
                    pathname: '/TPNote/1'
                })
                console.log('Новая ТП заметка')
                }}/>
            <Navigation TPNoteCount={99} GPPNoteCount={99} RTPNoteCount={99}/>
        </SafeAreaView>
      )
}

export default TPListNotes;

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