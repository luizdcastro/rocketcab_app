import React from 'react'
import { Container } from './styles'
import { ScrollView } from 'react-native'

const NotificationPage = () => {
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 10 }}>
            </ScrollView>
        </Container>
    )
}

export const pageOptions = {
    headerTitle: 'Notificações',
    headerTitleStyle: {
        fontFamily: 'NunitoSans_700Bold',
        color: 'grey',
    },
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerStyle: {
        height: 75,
    },
}

export default NotificationPage