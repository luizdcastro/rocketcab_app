import React from 'react'
import { Container } from './styles'
import { Text, Button } from 'react-native'

const DrawerContent = ({ navigation }) => {
    return (
        <Container>
            <Button title="Teste" onPress={() => navigation.navigate("ProfilePage")} />
            <Text>Hello</Text>
        </Container>
    )
}

export default DrawerContent