/**
 * @format
 */

import {
    AppRegistry
} from 'react-native';
import initialize from './src/app/app'
import {
    name as appName
} from './app.json';

AppRegistry.registerComponent(appName, () => initialize());