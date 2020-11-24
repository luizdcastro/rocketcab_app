import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from 'styled-components'

import AuthStack from "../AuthStack";

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

const App = () => {
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
                    <AuthStack />
                </ThemeProvider>
            </NavigationContainer>
        );
    }
};

export default App;