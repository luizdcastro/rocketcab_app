import React from 'react'
import { Container, Title, ImageCarousel, HeaderLeft, HeaderTitle } from './styles'
import { TouchableOpacity, ScrollView, Dimensions, View, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons';
import Carousel, { PaginationLight } from 'react-native-x2-carousel';

import { data } from "../../components/CarouselItem/data";

import CategoryCard from '../../components/CategoryCard'
import DiscontCard from '../../components/DiscontCard'
import PartnerCard from '../../components/PartnerCard'
import SvgPosto from '../../assets/svg/posto'
import SvgLocadora from '../../assets/svg/locadora'
import SvgSeguro from '../../assets/svg/seguro'
import SvgLazer from '../../assets/svg/lazer'
import SvgLavacar from '../../assets/svg/lavacar'
import SvgManutenção from '../../assets/svg/manutenção'
import SvgRestaurante from '../../assets/svg/restaurante'

const { width, height } = Dimensions.get('window')

const HomePage = () => {
    const renderItem = item => (
        <TouchableOpacity style={styles.carouselCard} key={item.id}>
            <ImageCarousel width={width - 20} source={{ uri: item.url }} />
        </TouchableOpacity>
    );
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Carousel
                    pagination={PaginationLight}
                    renderItem={renderItem}
                    data={data}
                    autoplay={true}
                    autoplayInterval={4500}
                />
                <Title>Categorias</Title>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 10, height: 100 }}>
                    <CategoryCard title="Postos" backgroundColor="#fddd5c" children={<SvgPosto />} />
                    <CategoryCard title="Locadoras" backgroundColor="#6978EA" children={<SvgLocadora />} />
                    <CategoryCard title="Seguros" backgroundColor="#fddd5c" children={<SvgSeguro />} />
                    <CategoryCard title="Lazer" backgroundColor="#6978EA" children={<SvgLazer />} />
                    <CategoryCard title="Lava-car" backgroundColor="#fddd5c" children={<SvgLavacar />} />
                    <CategoryCard title="Manutenção" backgroundColor="#6978EA" children={<SvgManutenção />} />
                    <CategoryCard title="Restaurantes" backgroundColor="#fddd5c" style={{ marginRight: 0 }} children={<SvgRestaurante />} />
                </ScrollView>
                <Title>Descontos em Destaque</Title>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 10 }}>
                    <View style={{ marginBottom: 3, marginRight: 10 }}>
                        <DiscontCard buttonTitle="Abrir" />
                        <DiscontCard buttonTitle="Abrir" />
                        <DiscontCard buttonTitle="Abrir" />
                    </View>
                    <View style={{ marginBottom: 3 }}>
                        <DiscontCard buttonTitle="Abrir" />
                        <DiscontCard buttonTitle="Abrir" />
                        <DiscontCard buttonTitle="Abrir" />
                    </View>
                </ScrollView>
                <Title>Parceiros em Destaque</Title>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 10 }}>
                    <View style={{ marginBottom: 3, marginRight: 10 }}>
                        <PartnerCard buttonTitle="Detalhes" />
                        <PartnerCard buttonTitle="Detalhes" />
                        <PartnerCard buttonTitle="Detalhes" />
                    </View>
                    <View style={{ marginBottom: 3, marginRight: 10 }}>
                        <PartnerCard buttonTitle="Detalhes" />
                        <PartnerCard buttonTitle="Detalhes" />
                        <PartnerCard buttonTitle="Detalhes" />
                    </View>
                </ScrollView>
            </ScrollView>
        </Container>
    )
}

export const pageOptions = ({ navigation }) => {
    return {
        headerTitle: '',
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
            <HeaderLeft>
                <HeaderTitle>Curitiba, PR</HeaderTitle>
                <Feather name="chevron-down" size={23} color="grey" style={{ marginLeft: 4, paddingRight: 5 }} />
            </HeaderLeft>
        ),
        headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('SettingPage')}>
                <Feather name="settings" size={22} color="grey" style={{ marginLeft: 5 }} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    carouselCard: {
        height: 160,
        width: width - 20,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    }
})
export default HomePage