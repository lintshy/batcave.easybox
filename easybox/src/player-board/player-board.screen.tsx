import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Orientation from 'react-native-orientation-locker'
import { NavigationScreenProp } from 'react-navigation'
import { MediaPlayer } from '../media-player/media-player'

export class PlayerBoard extends Component<{ navigation: NavigationScreenProp<any, any> }>{
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        const { navigation } = this.props
        const url = navigation.getParam('url')
        console.log(url)
        return <View>
            <MediaPlayer
                url={url}
                icon={''} />

        </View>
    }


}