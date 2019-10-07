import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Orientation from 'react-native-orientation-locker'
import { NavigationScreenProp } from 'react-navigation'
import { MediaPlayer } from '../media-player/media-player'

export class PlayerBoard extends Component<{ navigation: NavigationScreenProp<any, any> }>{
    constructor(props) {
        super(props)
        const { navigation } = this.props
        navigation.addListener('willBlur', () => {
            Orientation.unlockAllOrientations()
        })
    }

    render() {
        const { navigation } = this.props
        const url = navigation.getParam('url')
        console.log(url)
        return <MediaPlayer
            url={url}
            icon={''} />


    }


}