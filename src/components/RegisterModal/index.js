import React, { useState, useEffect } from 'react'
import {
    Container,
    ModalContent,
    RegisterContent,
    Title,
    InputContainer,
    NameInput,
    PasswordInput,
    EmailInput,
    ErrorMessage,
} from './styles'
import { View } from 'react-native'

import moment from "moment"
import { cpf } from "cpf-cnpj-validator";
import { TextInputMask } from "react-native-masked-text";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import KeyboardButton from '../../components/KeyboardButton'

const RegisterModal = ({ closeModal }) => {

    // user registration data
    const [userCpf, setUserCpf] = useState("")
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("")
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    // data validation 
    const [verifyUserCpf, setVerifyUserCpf] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [dateIsValid, setDateIsValid] = useState(true)

    // form filled verification
    const [isCpfFilled, setIsCpfFilled] = useState(false)
    const [isPasswordFilled, setIsPasswordFilled] = useState(false)
    const [isNameDateFilled, setIsNameDateFilled] = useState(false)
    const [isEmailPhoneFilled, setIsEmailPhoneFilled] = useState(false)

    // cpf format validdation
    const handleCpfInput = (text) => {
        if (cpf.isValid(text)) {
            setUserCpf(text);
            setVerifyUserCpf(true);
        } else {
            setVerifyUserCpf(false);
        }
    };

    console.log(dateIsValid)

    // date formt validation
    useEffect(() => {
        if (date.length === 10) {
            const value = moment(date, "DD/MM/YYYY").isValid() &
                Number(date.split('/')[2]) < 2020 &
                Number(date.split('/')[2]) > 1850
            setDateIsValid(value)
        }
    }, [date, dateIsValid])

    return (
        <Container>
            <ModalContent behavior={Platform.OS === "ios" ? "padding" : "height"} >
                {!isCpfFilled ? (
                    <RegisterContent>
                        <View>
                            <AntDesign
                                name="close"
                                size={30}
                                color="grey"
                                onPress={closeModal}
                                style={{ alignSelf: 'flex-start', marginLeft: '3%' }}
                            />
                            <Title>Vamos começar seu cadastro, qual seu CPF?</Title>
                            <TextInputMask
                                blurOnSubmit={false}
                                type={"cpf"}
                                value={userCpf}
                                autoFocus={true}
                                keyboardType="number-pad"
                                onChangeText={(text) => {
                                    handleCpfInput(text);
                                    setUserCpf(text);
                                }}
                                style={{
                                    marginTop: '5%',
                                    marginLeft: '5%',
                                    fontFamily: 'NunitoSans_400Regular',
                                    fontSize: 22,
                                    color: !verifyUserCpf & userCpf.length >= 14 ? "#BA000D" : "#484848"
                                }}
                            />
                        </View>
                        <View>
                            {!verifyUserCpf & userCpf.length >= 14 ?
                                <ErrorMessage>CPF inváliddo</ErrorMessage>
                                : null
                            }
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
                    </RegisterContent>
                ) : isCpfFilled & !isPasswordFilled ? (
                    <RegisterContent>
                        <View>
                            <AntDesign
                                name="arrowleft"
                                size={30}
                                color="grey"
                                style={{ alignSelf: 'flex-start', marginLeft: '4%' }}
                                onPress={() => setIsCpfFilled(false)}
                            />
                            <Title>Crie sua senha de acesso?</Title>
                            <InputContainer>
                                <PasswordInput
                                    placeholder="Senha"
                                    blurOnSubmit={false}
                                    autoFocus={true}
                                    autoCorrect={false}
                                    value={userPassword}
                                    underlineColorAndroid="transparent"
                                    keyboardType='number-pad'
                                    secureTextEntry={secureTextEntry}
                                    onChangeText={(val) => setUserPassword(val)}
                                />
                            </InputContainer>
                            <View style={{ alignItems: 'flex-end', marginRight: '5%' }}>
                                {!secureTextEntry ?

                                    <MaterialCommunityIcons name="eye-outline" size={28} color="grey" onPress={() => setSecureTextEntry(true)} />
                                    :
                                    <MaterialCommunityIcons name="eye-off-outline" size={28} color="grey" onPress={() => setSecureTextEntry(false)} />
                                }
                            </View>
                            <InputContainer>
                                <PasswordInput
                                    blurOnSubmit={false}
                                    placeholder="Confirmar senha"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                    value={userConfirmPassword}
                                    keyboardType='number-pad'
                                    secureTextEntry={secureTextEntry}
                                    onChangeText={(val) => setUserConfirmPassword(val)}
                                />

                            </InputContainer>
                        </View>
                        <View>
                            {userPassword.length < 6 & userConfirmPassword.length >= 1 ?
                                <ErrorMessage>Senha precisa conter no mínimo 6 digitos</ErrorMessage>
                                : userConfirmPassword.length >= 6 &
                                    userConfirmPassword.length >= userPassword.length &
                                    userConfirmPassword !== userPassword ?
                                    <ErrorMessage>A confirmação de senha está incorreta</ErrorMessage>
                                    : null

                            }
                            {userPassword.length >= 6 & userConfirmPassword === userPassword ?
                                <KeyboardButton
                                    name="Continuar"
                                    textColor="#523BE4"
                                    borderColor="grey"
                                    onPress={() => setIsPasswordFilled(true)}
                                />
                                :
                                <KeyboardButton
                                    name="Continuar"
                                    textColor="grey"
                                    borderColor="grey"
                                />
                            }
                        </View>
                    </RegisterContent>
                ) : isPasswordFilled & !isNameDateFilled ? (
                    <RegisterContent>
                        <View>
                            <AntDesign
                                name="arrowleft"
                                size={30}
                                color="grey"
                                style={{ alignSelf: 'flex-start', marginLeft: '4%' }}
                                onPress={() => setIsPasswordFilled(false)}
                            />
                            <Title>Digite seu nome completo, data de nascimento</Title>
                            <InputContainer>
                                <NameInput
                                    placeholder="Nome completo"
                                    autoFocus={true}
                                    value={name}
                                    onChangeText={(value) => setName(value)}
                                    maxLength={25}
                                    blurOnSubmit={false}
                                />
                            </InputContainer>
                            <InputContainer>
                                <TextInputMask
                                    placeholder="Data de nascimento"
                                    type={"datetime"}
                                    options={{
                                        format: "DD/MM/YYYY",
                                    }}
                                    value={date}
                                    onChangeText={(value) => setDate(value)}
                                    blurOnSubmit={false}
                                    style={{
                                        marginTop: '5%',
                                        fontFamily: 'NunitoSans_400Regular',
                                        fontSize: 22,
                                        width: '75%',
                                        color: !dateIsValid & date.length === 10 ? "#BA000D" : "#484848"
                                    }}
                                />
                            </InputContainer>
                        </View>
                        <View>
                            {name.length < 3 & date.length >= 1 ?
                                <ErrorMessage>O nome informado é inváliddo</ErrorMessage>
                                : !dateIsValid & date.length === 10 & name.length >= 3 ?
                                    <ErrorMessage>A data informada está incorreta</ErrorMessage>
                                    : null
                            }
                            {dateIsValid & date.length === 10 & name.length >= 3 ?
                                <KeyboardButton
                                    name="Continuar"
                                    textColor="#523BE4"
                                    borderColor="grey"
                                    onPress={() => setIsNameDateFilled(true)}
                                />
                                :
                                <KeyboardButton
                                    name="Continuar"
                                    textColor="grey"
                                    borderColor="grey"
                                />
                            }
                        </View>
                    </RegisterContent>
                ) : isNameDateFilled & !isEmailPhoneFilled ? (
                    <RegisterContent>
                        <View>
                            <AntDesign
                                name="arrowleft"
                                size={30}
                                color="grey"
                                style={{ alignSelf: 'flex-start', marginLeft: '4%' }}
                                onPress={() => setIsPasswordFilled(false)}
                            />
                            <Title>Para finalizar, informe seu email e número de telefone com DDD</Title>
                            <InputContainer>
                                <EmailInput
                                    autoFocus={true}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    placeholder="Email"
                                    value={email}
                                    onChangeText={(value) => setEmail(value)}
                                    maxLength={30}
                                    blurOnSubmit={false}
                                />
                            </InputContainer>
                            <InputContainer>
                                <TextInputMask
                                    placeholder="Telefone"
                                    type={"cel-phone"}
                                    options={{
                                        maskType: "BRL",
                                        withDDD: true,
                                        dddMask: "(99) ",
                                    }}
                                    value={phone}
                                    onChangeText={(value) => setPhone(value)}
                                    blurOnSubmit={false}
                                    style={{
                                        marginTop: '5%',
                                        fontFamily: 'NunitoSans_400Regular',
                                        fontSize: 22,
                                        width: '75%',
                                        color: "#484848"
                                    }}
                                />
                            </InputContainer>
                        </View>
                        <View>
                            {phone.length >= 2 & (!email.includes("@") || !email.includes(".") || !email.length > 8) ?
                                <ErrorMessage>O email informado é inválido</ErrorMessage>
                                : null
                            }
                            {email.includes("@") & email.includes(".") & email.length > 8 & (phone.length >= 14) ?
                                <KeyboardButton
                                    name="Cadastrar"
                                    textColor="#523BE4"
                                    borderColor="grey"
                                    onPress={() => setIsNameDateFilled(true)}
                                />
                                :
                                <KeyboardButton
                                    name="Cadastrar"
                                    textColor="grey"
                                    borderColor="grey"
                                />
                            }
                        </View>

                    </RegisterContent>
                ) : null
                }
            </ModalContent>
        </Container>
    )
}

export default RegisterModal