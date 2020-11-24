import React from 'react';
import { StatusBar } from 'react-native'

import DarkButton from '../../components/DarkButton'
import LightButton from '../../components/LightButton'
import { Container, Logo, ImageCover, Title, ButtonContainer } from './styles'

const AuthPage = () => {
    return (
        <Container>
            <StatusBar barStyle='light-content' />
            <ImageCover source={require("../../assets/images/driver.png")}>
                <Logo></Logo>
                <ButtonContainer>
                    <Title>Os melhores {"\n"}benefícios sem {"\n"}complexidades</Title>
                    <DarkButton name="Criar sua conta" />
                    <LightButton name="Já tenho conta" />
                </ButtonContainer>
            </ImageCover>
        </Container>
    )
}
export default AuthPage