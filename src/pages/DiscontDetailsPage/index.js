import React from 'react'
import { Container, ImageBanner, MainContent, DiscontDetails, DetailsHeader, Title, SubTitle, DiscontTitle, IconBar, IconButton, IconTitle, TitleContent, RegularText } from './styles'
import { ScrollView, Dimensions, View, StatusBar } from 'react-native'

import { Feather } from '@expo/vector-icons';
import LightButton from '../../components/LightButton'

const { width, height } = Dimensions.get('window')

const DiscontDetailsPage = () => {
    return (
        <Container>
            <StatusBar barStyle='light-content' />
            <ImageBanner source={{ uri: 'https://image.freepik.com/free-vector/pink-bokeh-effect-background_23-2148476715.jpg' }} width={width} />
            <MainContent width={width} height={height - 100}>
                <DiscontDetails>
                    <DetailsHeader>
                        <View>
                            <Title>Troca de óleo</Title>
                            <SubTitle>Posto Ipiranga</SubTitle>
                        </View>
                        <View>
                            <SubTitle>Economize</SubTitle>
                            <DiscontTitle>15%</DiscontTitle>
                        </View>
                    </DetailsHeader>
                    <IconBar>
                        <IconButton>
                            <Feather name="map-pin" size={22} color="#523BE4" />
                            <IconTitle>Navegação</IconTitle>
                        </IconButton>
                        <IconButton>
                            <Feather name="phone-forwarded" size={22} color="#523BE4" />
                            <IconTitle>Contato</IconTitle>
                        </IconButton>
                        <IconButton>
                            <Feather name="globe" size={22} color="#523BE4" />
                            <IconTitle>Website</IconTitle>
                        </IconButton>
                    </IconBar>
                    <View>
                        <TitleContent>Regras de Utilização</TitleContent>
                        <RegularText>Dias: Seg, Ter, Qua</RegularText>
                        <RegularText>Horário: 10:00 ás 15:00</RegularText>
                    </View>
                    <View >
                        <TitleContent>Observações</TitleContent>
                        <ScrollView style={{ maxHeight: 120 }} showsVerticalScrollIndicator={false}>
                            <RegularText>Abrir o app e apresentar para o caixa antes de realizar o pagamento.</RegularText>
                        </ScrollView>
                    </View>
                    <View>
                        <TitleContent>Endereço</TitleContent>
                        <RegularText>Av. Silva Jardim, 1275</RegularText>
                        <RegularText>Rebouças, Curitiba - PR</RegularText>
                    </View>
                </DiscontDetails>
                <ButtonContainer>
                    <LightButton name="Gerar Cupom" borderColor="#523BE4" textColor="#523BE4" />
                </ButtonContainer>
            </MainContent>
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

export default DiscontDetailsPage