import React, { useState } from 'react';
import { StatusBar, Modal } from 'react-native'

import LoginModal from '../../components/LoginModal'
import RegisterModal from '../../components/RegisterModal'
import DarkButton from '../../components/DarkButton'
import LightButton from '../../components/LightButton'
import { Container, Logo, ImageCover, Title, ButtonContainer } from './styles'

const AuthPage = ({ navigation }) => {
    const [loginModal, setLoginModal] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)

    return (
        <Container behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <StatusBar barStyle='light-content' />
            <ImageCover source={require("../../assets/images/driver.png")}>
                <Modal transparent={true} animationType='slide' visible={loginModal}>
                    <LoginModal closeModal={() => setLoginModal(false)} />
                </Modal>
                <Modal transparent={true} animationType='slide' visible={registerModal}>
                    <RegisterModal closeModal={() => setRegisterModal(false)} />
                </Modal>
                <Logo></Logo>
                <ButtonContainer>
                    <Title>Os melhores {"\n"}benefícios sem {"\n"}complexidades</Title>
                    <DarkButton
                        name="Criar sua conta"
                        onPress={() => setRegisterModal(!registerModal)}
                    />
                    <LightButton
                        textColor="#FAFAFA"
                        borderColor="#FAFAFA"
                        name="Já tenho conta"
                        onPress={() => setLoginModal(!loginModal)} />
                </ButtonContainer>
            </ImageCover>
        </Container>
    )
}
export default AuthPage