import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header title={"Главная страница"}/>
      <HomePage/>           
      <Navigation TPNoteCount={99} GPPNoteCount={99} RTPNoteCount={99}/>
            {/* <StatusBar style="auto"/> */}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
  },
})