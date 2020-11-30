import React, { useState, useEffect } from 'react'
import {
    Container,
    SearchBar,
    FilterContainer,
    FilterMenu,
    FilterMenuMiddle,
    TitleMenu,
    SeparatorMenu,
} from './styles'
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Keyboard, Dimensions,
    TouchableWithoutFeedback,
    Platform,
    FlatList,
    Modal
} from 'react-native'

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import PartnerCard from '../../components/PartnerCard'
import { data } from "../../components/CarouselItem/data";

const { width, height } = Dimensions.get('window')

const SearchPage = () => {
    const [search, setSearch] = useState('')
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [modalCidade, setModalCidade] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <Container>
            <SearchBar>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Procurar"
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='default'
                    onChangeText={(value) => setSearch(value)}
                />
                <View style={styles.searchIcon} >
                    <Feather name="search" size={26} color="#523BE4" />
                </View>
                <View style={styles.closeIcon} >
                    {isKeyboardVisible ?
                        <TouchableOpacity>
                            <AntDesign name="close" size={26} color="grey" onPress={() => Keyboard.dismiss()} />
                        </TouchableOpacity>
                        : null}
                </View>
            </SearchBar>
            <FilterContainer width={width - 20}>
                <FilterMenu onPress={() => setModalCidade(true)}>
                    <TitleMenu>Cidade</TitleMenu>
                    <Feather
                        name={!modalCidade ? 'chevron-down' : 'chevron-up'}
                        size={16} color="grey"
                        style={{ marginLeft: 4, paddingTop: Platform.OS === 'android' ? 2 : 1 }} />
                    <SeparatorMenu>|</SeparatorMenu>
                </FilterMenu>
                <FilterMenuMiddle>
                    <TitleMenu>Categoria</TitleMenu>
                    <Feather name="chevron-down" size={16} color="grey" style={{ marginLeft: 4, paddingTop: Platform.OS === 'android' ? 2 : 1 }} />
                    <SeparatorMenu>|</SeparatorMenu>
                </FilterMenuMiddle>
                <FilterMenu >
                    <TitleMenu>Filtros</TitleMenu>
                    <Feather name="chevron-down" size={16} color="grey" style={{ marginLeft: 4, paddingTop: Platform.OS === 'android' ? 2 : 1 }} />
                </FilterMenu>
            </FilterContainer>
            <TouchableWithoutFeedback onPress={() => setModalCidade(false)}>
                <Modal visible={modalCidade} animationType='fade' transparent={true}>
                    <TouchableWithoutFeedback onPress={() => setModalCidade(false)}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? '30%' : '34%', }}>
                                <View style={{ backgroundColor: '#fafafa', height: 210 }}>
                                </View>
                            </View>
                            <View style={{ flex: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </TouchableWithoutFeedback>
            <FlatList
                style={{ marginTop: 10, marginLeft: 10 }}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => (
                    <PartnerCard buttonTitle="Detalhes" />
                )}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 50,
        paddingLeft: 50,
        fontFamily: "NunitoSans_400Regular",
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.09,
        shadowRadius: 0.5,
        elevation: 0.5,
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 12,
        elevation: 1
    },
    closeIcon: {
        position: 'absolute',
        right: 10,
        top: 12,
        elevation: 1
    }
})

export default SearchPage