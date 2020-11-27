import React from "react";
import { View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

import HomePage, { pageOptions as HomePageOptions } from "../../pages/HomePage";
import ProfilePage from '../../pages/ProfilePage'
import SearchPage from '../../pages/SearchPage'
import CupomPage from '../../pages/CupomPage'
import FavoritePage from '../../pages/FavoritePage'

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();

const HomePageStack = () => (
    <MainStack.Navigator headerMode='screen'>
        <MainStack.Screen name="HomePage" component={HomePage} options={HomePageOptions} />
    </MainStack.Navigator>
);

const MainStackPage = ({ navigation }) => (
    <Tab.Navigator headerMode='screen'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Cupons':
                        iconName = 'shopping-bag';
                        break;

                    case 'Favoritos':
                        iconName = 'heart';
                        break;
                    case 'Perfil':
                        iconName = 'user';
                        break;
                    default:
                        iconName = 'circle';
                        break;
                }

                return <Icon name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: '#523BE4',
            inactiveTintColor: '#777',
            showLabel: false,

        }}
    >
        <Tab.Screen name="Home" component={HomePageStack} />
        <Tab.Screen name="Cupons" component={CupomPage} />
        <Tab.Screen name="Search" component={SearchPage}
            options={() => ({
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#523BE4', '#6978EA']}>
                            <Icon name="search" size={26} color='#FFF' />
                        </LinearGradient>
                    </View>
                ),
            })}
        />
        <Tab.Screen name="Favoritos" component={FavoritePage} />
        <Tab.Screen name="Perfil" component={ProfilePage} />
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTabRound: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
        shadowColor: '#2193b0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});

export default MainStackPage;