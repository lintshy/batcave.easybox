import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { Dashboard } from '../dashboard/dashboard.screen'
import { PlayerBoard } from '../player-board/player-board.screen'
import { SplashScreen } from '../splash/splash.screen'



const AppNavigator = createStackNavigator({
    Splash: {
        screen: SplashScreen
    },
    Home: {
        screen: Dashboard,
    },
    MediaPlayer: {
        screen: PlayerBoard,
        navigationOptions: {
            header: null,
        }
    }
}, {
    initialRouteName: 'Splash',
});

export default AppNavigator
