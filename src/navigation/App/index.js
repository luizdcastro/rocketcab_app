import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from 'styled-components'

import AuthStack from "../AuthStack";
import MainStack from '../MainStack'
import DrawerContent from '../../components/DrawerContent'

import {
    useFonts,
    NunitoSans_200ExtraLight,
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black,
} from '@expo-google-fonts/nunito-sans'

import { AppLoading } from "expo";

const AppStack = createStackNavigator();


const App = ({ auth }) => {
    let [fontsLoaded] = useFonts({
        NunitoSans_200ExtraLight,
        NunitoSans_300Light,
        NunitoSans_400Regular,
        NunitoSans_600SemiBold,
        NunitoSans_700Bold,
        NunitoSans_800ExtraBold,
        NunitoSans_900Black,
    });

    const theme = {
        background: '#FAFAFA',
        primaryColor: '#523BE4'
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer>
                <ThemeProvider theme={theme}>
                    {!auth.isLoggedIn ?
                        < AuthStack />
                        :
                        <MainStack />
                    }
                </ThemeProvider>
            </NavigationContainer>
        );
    }
};


const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(App);