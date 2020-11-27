import React from 'react'
import { Container } from './styles'
import { TouchableOpacity, Text, ScrollView, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import SvgPostos from '../../assets/svg/postoIcon'
import SvgLocadoras from '../../assets/svg/locadoraIcon'

const HomePage = () => {
    return (
        <Container>
            <ScrollView horizontal={true} style={{ marginHorizontal: 15, marginTop: 15 }}>
                <View style={{ width: 90, height: 65, alignItems: 'center', borderRadius: 5, marginRight: 15 }}>
                    <TouchableOpacity style={{ backgroundColor: '#6978EA', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                        <SvgPostos />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'NunitoSans_400Regular', fontSize: 15, marginTop: 5, textAlign: 'center' }}>Postos</Text>
                </View>
                <View style={{ width: 90, height: 65, alignItems: 'center', borderRadius: 5, marginRight: 15 }}>
                    <TouchableOpacity style={{ backgroundColor: '#6978EA', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                        <SvgLocadoras />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'NunitoSans_400Regular', fontSize: 15, marginTop: 5, textAlign: 'center' }}>Postos</Text>
                </View>

            </ScrollView>
        </Container>
    )
}

export const pageOptions = {
    headerTitle: '',
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerStyle: {
        height: Platform.OS === 'ios' ? 70 : 70,
    },
    headerLeft: () => (
        <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 15, alignItems: 'center' }} >
            <Text style={{ fontFamily: 'NunitoSans_600SemiBold', fontSize: 15 }}>Curitiba, PR</Text>
            <Feather name="chevron-down" size={22} color="#523BE4" style={{ marginLeft: 5 }} />
        </TouchableOpacity >
    ),
    headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 15 }}>
            <Feather name="bell" size={22} color="#523BE4" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
    )
}


export default HomePage