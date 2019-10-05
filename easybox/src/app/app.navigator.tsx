import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { Dashboard } from '../dashboard/dashboard.screen'
import { MediaPlayer } from '../media-player/media-player'

const AppNavigator = createStackNavigator({
    Home: {
        screen: MediaPlayer,
    },
});

export default AppNavigator
