import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileScreen } from './src/screens/profile'
import { Providers } from './src/providers'

export default function App() {
  return (
    <Providers>
      <StatusBar style="auto" />
      <SafeAreaView>
        <ProfileScreen />
      </SafeAreaView>
    </Providers>
  )
}
