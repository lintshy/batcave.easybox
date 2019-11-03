import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { MediaPlayer } from '../media-player/media-player'

import Orientation from 'react-native-orientation-locker'
import { NavigationScreenProp, ScrollView } from 'react-navigation'
import Carousel from 'react-native-snap-carousel'
import * as _ from 'lodash'

import { channel } from '../iptv/iptv.types'

const { height, width } = Dimensions.get('window')

export class Dashboard extends Component<{ navigation: NavigationScreenProp<any, any>, channels: channel[] }>{
    entries: any
    constructor(props) {
        super(props)


    }
    componentDidMount() {

        Orientation.unlockAllOrientations()


    }
    render() {

        const { navigation } = this.props
        const channels = navigation.getParam('channels')
        return <ScrollView
            contentContainerStyle={styles.container}
        >
            <Text>Dashboard</Text>
            {_.map(channels, (channel: channel) => {
                return <TouchableOpacity onPress={() => this.handleNavigation(channel)}>
                    <View>
                        <Text>{channel.groupTitle}</Text>
                    </View>
                </TouchableOpacity>
            })}


        </ScrollView>


    }


    handleNavigation = (channel: channel) => {

        const { navigation } = this.props
        navigation.navigate('MediaPlayer', {
            'url': channel.url,
            'title': channel.groupTitle
        })
    }
    handleSelection = (index) => {
        console.log(index)
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',

    },

})