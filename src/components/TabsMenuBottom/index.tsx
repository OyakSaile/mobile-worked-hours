import { Text } from 'react-native'
import { Container, ContainerIcon } from './styles'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'
export const TabsMenuBottom = () => {
  return (
    <Container>
      <Link href="/">
        <ContainerIcon>
          <AntDesign name="home" size={24} color="black" />
          <Text>Home</Text>
        </ContainerIcon>
      </Link>

      <ContainerIcon>
        <AntDesign name="search1" size={24} color="black" />
        <Text>Search</Text>
      </ContainerIcon>
      <ContainerIcon>
        <AntDesign name="pluscircle" size={24} color="black" />
      </ContainerIcon>

      <ContainerIcon>
        <Entypo name="back-in-time" size={24} color="black" />
        <Text>Histórico</Text>
      </ContainerIcon>

      <Link href="/profile">
        <ContainerIcon>
          <AntDesign name="user" size={24} color="black" />
          <Text>Perfil</Text>
        </ContainerIcon>
      </Link>
    </Container>
  )
}
