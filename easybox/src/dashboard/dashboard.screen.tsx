import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MediaPlayer } from '../media-player/media-player'
import { urlIndia } from '../url-library/url-india'
import Orientation from 'react-native-orientation-locker'
import { NavigationScreenProp } from 'react-navigation'

export class Dashboard extends Component<{ navigation: NavigationScreenProp<any, any> }>{
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    componentDidMount() {
        Orientation.unlockAllOrientations()
    }
    render() {

        return <View
            style={styles.container}>
            <Text>Dashboard</Text>
            <TouchableOpacity onPress={this.handleNavigation}>
                <View>
                    <Text>Mazhavil Manorama</Text>
                </View>
            </TouchableOpacity>
        </View>


    }
    handleNavigation = () => {
        const channel = urlIndia.items[0]
        const { navigation } = this.props
        navigation.navigate('MediaPlayer', {
            'url': channel.url
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})