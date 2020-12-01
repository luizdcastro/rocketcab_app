import React from 'react'
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')


const DiscontCard = ({ buttonTitle, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{ uri: 'https://image.freepik.com/free-vector/bokeh-lights-effect-dark-background_23-2148436855.jpg' }} />
            <View style={styles.mainContent}>
                <Text style={styles.title}>Troca de óleo</Text>
                <Text style={styles.subtitle}>Posto Ipiranga</Text>
                <Text style={styles.bottomText}>Seg, Ter, Qui - 08:00 às 18:00</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.discontText}>15%</Text>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{buttonTitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        height: 80,
        marginTop: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.09,
        shadowRadius: 0.5,
        elevation: 0.5,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginLeft: 10
    },
    mainContent: {
        marginLeft: 10,
        flex: 3,
    },
    title: {
        fontFamily: 'NunitoSans_600SemiBold',
        fontSize: 15
    },
    subtitle: {
        fontFamily: 'NunitoSans_400Regular',
    },
    bottomText: {
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 12
    },
    discontText: {
        fontFamily: 'NunitoSans_600SemiBold', fontSize: 18
    },
    button: {
        backgroundColor: '#fafafa',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: 'NunitoSans_700Bold',
        textTransform: 'uppercase',
        fontSize: 11,
        color: '#523BE4'
    }
})

export default DiscontCard