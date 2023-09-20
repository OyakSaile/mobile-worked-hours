import { Slot, Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabsMenuBottom } from '../src/components/TabsMenuBottom'
import { ContainerGlobal } from '../src/styles/global'

export default function Layout() {
  return (
    <SafeAreaView>
      <ContainerGlobal>
        <Slot />
        <TabsMenuBottom />
      </ContainerGlobal>
    </SafeAreaView>
  )
}
