import React from 'react'
import { Container } from './styles'
import { ScrollView, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SettingPage = ({ navigation }) => {
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 10 }}>
            </ScrollView>
        </Container>
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

export default SettingPage