import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MediaPlayer } from '../media-player/media-player'
import { urlIndia } from '../url-library/url-india'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const channel = urlIndia.items[0]
        return <View
            style={styles.container}>
            <Text>Dashboard</Text>
            <MediaPlayer url={channel.url}></MediaPlayer>
        </View>


    }
}

const styles = StyleSheet.create({
    container: {
        width: 600,
        height: 600
    }
})