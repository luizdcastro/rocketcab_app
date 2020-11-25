import React, { useState, useRef, useEffect } from 'react'
import { Container, ModalContent, LoginContent, Title, InputContainer, PasswordInput, TextLink } from './styles'
import { View, TouchableOpacity } from 'react-native'


import { cpf } from "cpf-cnpj-validator";
import { TextInputMask } from "react-native-masked-text";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import KeyboardButton from '../../components/KeyboardButton'

const LoginModal = ({ setRegisterModal, setLoginModal }) => {
    const [userCpf, setUserCpf] = useState('')
    const [verifyUserCpf, setVerifyUserCpf] = useState(false);
    const [isCpfFilled, setIsCpfFilled] = useState(false)
    const [userPassword, setUserPassword] = useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleCpfInput = (text) => {
        if (cpf.isValid(text)) {
            setUserCpf(text);
            setVerifyUserCpf(true);
        } else {
            setVerifyUserCpf(false);
        }
    };

    return (
        <Container>
            <ModalContent behavior={Platform.OS === "ios" ? "padding" : "height"} >
                {!isCpfFilled ?
                    <LoginContent >
                        <View>
                            <AntDesign
                                name="close"
                                size={30}
                                color="grey"
                                onPress={() => setLoginModal(false)}
                                style={{ alignSelf: 'flex-start', marginLeft: '3%' }}
                            />
                            <Title>Para entrar, digite seu CPF</Title>
                            <TextInputMask
                                type={"cpf"}
                                blurOnSubmit={true}
                                autoFocus={true}
                                value={userCpf}
                                keyboardType="number-pad"
                                onChangeText={(text) => {
                                    handleCpfInput(text);
                                    setUserCpf(text);
                                }}
                                style={{
                                    marginTop: '5%',
                                    marginLeft: '5%',
                                    height: 45,
                                    fontFamily: 'NunitoSans_400Regular',
                                    fontSize: 24,
                                    color: !verifyUserCpf & userCpf.length >= 14 ? "#BA000D" : "#484848"
                                }}
                            />
                        </View>
                        <View style={{}}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                                onPress={() => {
                                    setLoginModal(false);
                                    setRegisterModal(true)
                                }}>
                                <TextLink>Ainda não tem conta? Começar</TextLink>
                                <EvilIcons name="chevron-right" size={22} color="grey" style={{ alignSelf: 'flex-start', marginTop: 2, marginLeft: -5 }} />
                            </TouchableOpacity>
                            {!verifyUserCpf ?
                                <KeyboardButton
                                    name="Continuar"
                                    textColor="grey"
                                    borderColor="grey"
                                />
                                :
                                <KeyboardButton
                                    name="Continuar"
                                    textColor="#523BE4"
                                    borderColor="grey"
                                    onPress={() => setIsCpfFilled(true)}
                                />
                            }
                        </View>
                    </LoginContent>
                    :
                    <LoginContent>
                        <View>
                            <AntDesign
                                name="arrowleft"
                                size={30}
                                color="grey"
                                style={{ alignSelf: 'flex-start', marginLeft: '4%' }}
                                onPress={() => setIsCpfFilled(false)}
                            />
                            <Title>Qual sua senha de acesso?</Title>
                            <InputContainer>
                                <PasswordInput
                                    autoFocus={true}
                                    blurOnSubmit={false}
                                    value={userPassword}
                                    keyboardType='number-pad'
                                    secureTextEntry={secureTextEntry}
                                    onChangeText={(val) => setUserPassword(val)}
                                />
                                {!secureTextEntry ?
                                    <MaterialCommunityIcons name="eye-outline" size={28} color="grey" onPress={() => setSecureTextEntry(true)} />
                                    :
                                    <MaterialCommunityIcons name="eye-off-outline" size={28} color="grey" onPress={() => setSecureTextEntry(false)} />}
                            </InputContainer>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextLink>Esqueci minha senha</TextLink>
                                <EvilIcons name="chevron-right" size={22} color="grey" style={{ alignSelf: 'flex-start', marginTop: 2, marginLeft: -5 }} />
                            </TouchableOpacity>
                            {userPassword.length < 6 ?
                                <KeyboardButton
                                    name="Entrar"
                                    textColor="grey"
                                    borderColor="grey"
                                />
                                :
                                <KeyboardButton
                                    name="Entrar"
                                    textColor="#523BE4"
                                    borderColor="grey"
                                />
                            }

                        </View>
                    </LoginContent>
                }
            </ModalContent>
        </Container>
    )
}

export default LoginModal