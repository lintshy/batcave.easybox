import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { Dashboard } from '../dashboard/dashboard.screen'
import { PlayerBoard } from '../player-board/player-board.screen'



const AppNavigator = createStackNavigator({
    Home: {
        screen: Dashboard,
    },
    MediaPlayer: {
        screen: PlayerBoard
    }
}, {
    initialRouteName: 'Home',
});

export default AppNavigator
