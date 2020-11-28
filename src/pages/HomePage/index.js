import React from 'react'
import { Container } from './styles'
import { TouchableOpacity, Text, ScrollView, StyleSheet, Image, Dimensions, View } from 'react-native'

import { Feather } from '@expo/vector-icons';
import Carousel, { Pagination, PaginationLight } from 'react-native-x2-carousel';

import { data } from "../../components/CarouselItem/data";

import CategoryCard from '../../components/CategoryCard'
import CarouselItem from '../../components/CarouselItem'
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
        <View style={styles.cardView} key={item.id}>
            <Image style={styles.image} source={{ uri: item.url }} />
        </View>
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
                <Text style={{ fontFamily: 'NunitoSans_600SemiBold', fontSize: 18, marginHorizontal: 10, marginTop: 15 }}>Categorias </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 15, marginHorizontal: 10, height: 100 }}>
                    <CategoryCard title="Postos" backgroundColor="gold" children={<SvgPosto />} />
                    <CategoryCard title="Locadoras" backgroundColor="#6978EA" children={<SvgLocadora />} />
                    <CategoryCard title="Seguros" backgroundColor="gold" children={<SvgSeguro />} />
                    <CategoryCard title="Lazer" backgroundColor="#6978EA" children={<SvgLazer />} />
                    <CategoryCard title="Lava-car" backgroundColor="gold" children={<SvgLavacar />} />
                    <CategoryCard title="Manutenção" backgroundColor="#6978EA" children={<SvgManutenção />} />
                    <CategoryCard title="Restaurantes" backgroundColor="gold" style={{ marginRight: 0 }} children={<SvgRestaurante />} />
                </ScrollView>
            </ScrollView>
        </Container>
    )
}

export const pageOptions = {
    headerTitle: '',
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerStyle: {
        height: Platform.OS === 'ios' ? 70 : 60,
    },
    headerLeft: () => (
        <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center' }} >
            <Text style={{ fontFamily: 'NunitoSans_600SemiBold', fontSize: 16 }}>Curitiba, PR</Text>
            <Feather name="chevron-down" size={22} color="#523BE4" style={{ marginLeft: 5 }} />
        </TouchableOpacity >
    ),
    headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 10 }}>
            <Feather name="bell" size={22} color="grey" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        height: 160,
        width: width - 20,
        marginLeft: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    image: {
        width: width - 20,
        height: 160,
        borderRadius: 5,
    },
})



export default HomePage