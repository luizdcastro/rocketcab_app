import React from 'react'
import { Container } from './styles'
import { ScrollView } from 'react-native'

import DiscontCard from '../../components/DiscontCard'

const DiscontPage = () => {
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 10 }}>
                <DiscontCard buttonTitle="Utilizar" />
            </ScrollView>
        </Container>
    )
}

export const pageOptions = {
    headerTitle: 'Meus Descontos',
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

export default DiscontPage