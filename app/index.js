import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const HomePage = () => {
  return (
    <SafeAreaView>
        <View>
            <Text>Home Page Now</Text>
            <Link href={"/GPP/"}>Go to Gpp</Link>
            <Link href={"/TP/"}>Go to TP</Link>
            <Link href={"/RTP/"}>Go to Rtp</Link>
            <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({})