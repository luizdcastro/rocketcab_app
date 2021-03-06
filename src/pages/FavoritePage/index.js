import React from 'react'
import { Container } from './styles'
import { ScrollView } from 'react-native'

import PartnerCard from '../../components/PartnerCard'

const FavoritePage = () => {
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 10 }}>
                <PartnerCard buttonTitle="Detalhes" />
                <PartnerCard buttonTitle="Detalhes" />
            </ScrollView>
        </Container>
    )
}

export const pageOptions = {
    headerTitle: 'Meus Favoritos',
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

export default FavoritePage