import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View>
      <Text>Home page</Text>
      <Link href="/profile">Go to profile</Link>
    </View>
  )
}
