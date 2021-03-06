import React from "react";
import { View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

import HomePage, { pageOptions as HomePageOptions } from "../../pages/HomePage";
import SearchPage from '../../pages/SearchPage'
import DiscontPage, { pageOptions as DiscontPageOptions } from '../../pages/DiscontPage'
import FavoritePage, { pageOptions as FavoritePageOptions } from '../../pages/FavoritePage'
import NotificationPage, { pageOptions as NotificationPageOptions } from '../../pages/NotificationPage'
import SettingPage, { pageOptions as SettingPageOptions } from '../../pages/SettingPage'
import DiscontDetailsPage, { pageOptions as DiscontDetailsOptions } from '../../pages/DiscontDetailsPage'
import ProfilePage from '../../pages/ProfilePage'


const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();

const HomePageStack = () => (
    <MainStack.Navigator headerMode='screen' >
        <MainStack.Screen name="HomePage" component={HomePage} options={HomePageOptions} />
    </MainStack.Navigator>
)

const DiscontPageStack = () => (
    <MainStack.Navigator headerMode='screen'>
        <MainStack.Screen name="DiscontPage" component={DiscontPage} options={DiscontPageOptions} />
    </MainStack.Navigator>
);

const FavoritePageStack = () => (
    <MainStack.Navigator headerMode='screen'>
        <MainStack.Screen name="FavoritePage" component={FavoritePage} options={FavoritePageOptions} />
    </MainStack.Navigator>
);

const NotificationPageStack = () => (
    <MainStack.Navigator headerMode='screen'>
        <MainStack.Screen name="NotificationPage" component={NotificationPage} options={NotificationPageOptions} />
    </MainStack.Navigator>
);

const BottomStackPage = ({ navigation }) => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => {
                let iconName;
                switch (route.name) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Discontos':
                        iconName = 'shopping-bag';
                        break;
                    case 'Favoritos':
                        iconName = 'heart';
                        break;
                    case 'Notificações':
                        iconName = 'bell';
                        break;
                    default:
                        iconName = 'circle';
                        break;
                }
                return <Icon name={iconName} size={focused ? 28 : size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: '#523BE4',
            inactiveTintColor: '#777',
            showLabel: false,

        }}
    >
        <Tab.Screen name="Home" component={HomePageStack} />
        <Tab.Screen name="Discontos" component={DiscontPageStack} />
        <Tab.Screen name="Search" component={SearchPage}
            options={() => ({
                tabBarIcon: ({ tintColor, focused }) => (
                    <View>
                        <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#523BE4', '#6978EA']}>
                            <Icon name="search" size={focused ? 30 : 26} color='#FFF' />
                        </LinearGradient>
                    </View>
                ),
            })}
        />
        <Tab.Screen name="Favoritos" component={FavoritePageStack} />
        <Tab.Screen name="Notificações" component={NotificationPageStack} />
    </Tab.Navigator>
)

const MainStackPage = ({ navigation }) => (
    <MainStack.Navigator>
        <MainStack.Screen name="BottomStackPage" component={BottomStackPage} options={{ headerShown: false }} />
        <MainStack.Screen name="SettingPage" component={SettingPage} options={SettingPageOptions} />
        <MainStack.Screen name="DiscontDetailsPage" component={DiscontDetailsPage} options={{ headerShown: false }} />
        <MainStack.Screen name="ProfilePage" component={ProfilePage} />
    </MainStack.Navigator>
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