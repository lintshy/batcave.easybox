import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { Dashboard } from '../dashboard/dashboard.screen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: Dashboard,
    },
});

export default AppNavigator
