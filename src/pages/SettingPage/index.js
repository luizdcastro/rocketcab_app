import React from 'react'
import { Container } from './styles'
import { connect } from "react-redux";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { logoutUser } from '../../redux/actions/authActions'

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SettingPage = ({ navigation, dispatchLogoutAction }) => {

    const handleLogOut = (event) => {
        event.preventDefault();
        dispatchLogoutAction()
    }

    return (
        <Container>
            <View style={styles.personalData}>
                <Image
                    style={styles.avatar}
                    source={{ uri: "https://image.freepik.com/free-vector/pink-bokeh-effect-background_23-2148476715.jpg" }}
                />
                <View>
                    <Text style={styles.name}>Olá, Luiz</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AvatarPage')}>
                        <Text style={styles.pictureText}>Alterar foto</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Informações Pessoais</Text>
                    <Feather name="user" size={22} color="#523BE4" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Dados de Contato</Text>
                    <Feather name="mail" size={22} color="#523BE4" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Meu Endereço</Text>
                    <Feather name="map-pin" size={22} color="#523BE4" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 3, justifyContent: 'flex-end', marginBottom: 30 }}>
                <View >
                    <TouchableOpacity style={styles.button} onPress={handleLogOut}>
                        <Text style={styles.buttonText}>Sair</Text>
                        <Ionicons name="md-exit" size={22} color="#523BE4" style={{ marginLeft: 20, marginRight: 15 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </Container >
    )
}

export const pageOptions = ({ navigation }) => {
    return {
        headerTitle: 'Configurações',
        headerTitleStyle: {
            fontFamily: 'NunitoSans_700Bold',
            color: 'grey',
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
            height: 75,
        },
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <AntDesign name="arrowleft" size={25} color="grey" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
        ),
    }
}

const styles = StyleSheet.create({
    personalData: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    pictureText: {
        fontFamily: 'NunitoSans_700Bold',
        color: '#523BE4',
        fontSize: 12
    },
    name: {
        fontFamily: "NunitoSans_800ExtraBold",
        fontSize: 18,
        paddingBottom: 3,
        color: '#484848'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomWidth: 0.3,
        marginBottom: 20
    },
    buttonText: {
        fontFamily: 'NunitoSans_700Bold',
        fontSize: 15,
        color: 'grey'
    },
})

const mapDispatchToProps = (dispatch) => ({
    dispatchLogoutAction: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(SettingPage)